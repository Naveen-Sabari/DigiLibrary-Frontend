import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-gym',
  standalone: true,
  imports: [RouterModule,CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './gym.component.html',
  styleUrl: './gym.component.css'
})
export class GymComponent {



 
  workouts = [
    {
      id: 1,
      title: 'Full Body Workout',
      image: '../../../../assets/imgg/gym1.jpg',
      description: 'A complete workout for all muscle groups.',
      details: `Includes exercises like squats, deadlifts, and bench presses. Full-body workouts engage all the major muscle groups, promoting strength, endurance, and overall fitness. 
                This routine targets your chest, back, legs, shoulders, and core to provide a balanced and effective workout. Great for beginners and advanced athletes alike!`
    },
    {
      id: 2,
      title: 'Cardio Burn',
      image: '../../../../assets/imgg/gym3.webp',
      description: 'Burn fat and increase endurance with intense cardio routines.',
      details: `Running, cycling, and HIIT workouts. Cardio burn workouts are designed to boost your heart rate and torch calories, helping you lose fat while improving cardiovascular health. 
                High-intensity interval training (HIIT) maximizes fat burning and can be done in shorter periods, making it perfect for those with a busy schedule. Aim for at least 30 minutes of cardio 4-5 times a week.`
    },
    {
      id: 3,
      title: 'Strength Training',
      image: '../../../../assets/imgg/gym4.avif',
      description: 'Build muscle and strength with heavy lifting.',
      details: `Focus on compound movements and progressive overload. Strength training uses free weights, machines, and bodyweight exercises to challenge your muscles and build mass. 
                Key exercises include deadlifts, squats, bench presses, and overhead presses. Gradually increasing the weight will ensure continuous muscle growth and strength improvements. Strength training is essential for fat loss, muscle building, and boosting metabolism.`
    }
  ];
  
  mealPlans = [
    {
      id: 1,
      title: 'High Protein Diet',
      image: '../../../../assets/imgg/gym5.jpg',
      description: 'Fuel your body with protein-rich meals.',
      details: `Includes chicken, fish, and legumes. A high-protein diet helps in muscle recovery and growth, making it essential for athletes and gym-goers. 
                Meals rich in protein support muscle repair, maintain a higher metabolism, and reduce hunger pangs. Focus on lean meats like chicken breast, turkey, and fish like salmon or tuna. 
                Incorporate plant-based proteins like lentils, beans, and quinoa for variety and balance. Consider including protein shakes post-workout for faster recovery.`
    },
    {
      id: 2,
      title: 'Low Carb Meal Plan',
      image: '../../../../assets/imgg/gym6.avif',
      description: 'Perfect for weight loss or cutting phase.',
      details: `Focuses on lean meats, vegetables, and healthy fats. A low-carb meal plan reduces the intake of starchy foods like bread, pasta, and rice, which helps the body enter a fat-burning state called ketosis. 
                The plan encourages high-fat and moderate-protein meals, such as avocados, eggs, olive oil, and lean meats. 
                The goal is to lower insulin levels and burn fat for energy, which helps with weight loss. Pair this plan with high-intensity workouts for optimal results.`
    },
    {
      id: 3,
      title: 'Balanced Diet',
      image: '../../../../assets/imgg/gym7.jpg',
      description: 'Maintain a healthy lifestyle with a balanced diet.',
      details: `Incorporates proteins, carbs, and fats in a balanced manner. This diet is ideal for those who want to stay healthy without compromising on any essential nutrient. 
                It includes a variety of food from all food groups, with a focus on portion control and nutrient-dense options. 
                Whole grains, fruits, vegetables, lean meats, and healthy fats like nuts and seeds are included. The goal is to maintain energy levels, support muscle growth, and prevent nutrient deficiencies.`
    }
  ];
  
  expertTips = [
    {
      id: 1,
      title: 'Form is Key',
      image: '../../../../assets/imgg/gym8.webp',
      description: 'Proper form is essential to avoid injuries and maximize results.',
      details: `Make sure to always engage your core and use controlled movements. Correct form not only prevents injuries but also ensures you're targeting the right muscles during exercises. 
                Keep your back straight during squats, chest up during deadlifts, and always perform each movement with a full range of motion. If you're new to the gym, it's worth investing time in learning proper form from a trainer or using lighter weights until you get it right.`
    },
    {
      id: 2,
      title: 'Consistency is Everything',
      image: '../../../../assets/imgg/gym9.jpg',
      description: 'Stick to your routine and stay committed.',
      details: `Even small progress is progress. Stay consistent! Consistency is key to seeing results in the gym. Whether it's going for cardio sessions or lifting weights, sticking to your routine is crucial for making steady progress. 
                Track your progress regularly by measuring strength, endurance, or body measurements. Don't be discouraged by slow results; progress takes time, and every small step forward counts. Stay patient and committed to the process.`
    },
    {
      id: 3,
      title: 'Recovery Matters',
      image: '../../../../assets/imgg/gym11.jpg',
      description: 'Rest and recovery are just as important as your workouts.',
      details: `Make sure to get 7-9 hours of sleep and eat nutrient-dense meals. Recovery allows your muscles to repair and grow, and it also reduces the risk of overtraining. 
                Active recovery days, like stretching, yoga, or low-intensity workouts, help keep your body moving while it heals. Incorporating rest days into your routine is vital to prevent burnout and injuries. 
                Also, nutrition plays a significant role in recovery; make sure you're consuming enough protein and micronutrients to support muscle repair.`
    }
  ];
  

  selectedWorkout: any = null;
  selectedMealPlan: any = null;
  selectedTip: any = null;

  selectWorkout(id: number) {
    this.selectedWorkout = this.workouts.find(workout => workout.id === id);
    this.selectedMealPlan = null;
    this.selectedTip = null;
  }

  selectMealPlan(id: number) {
    this.selectedMealPlan = this.mealPlans.find(mealPlan => mealPlan.id === id);
    this.selectedWorkout = null;
    this.selectedTip = null;
  }

  selectTip(id: number) {
    this.selectedTip = this.expertTips.find(tip => tip.id === id);
    this.selectedWorkout = null;
    this.selectedMealPlan = null;
  }
}
