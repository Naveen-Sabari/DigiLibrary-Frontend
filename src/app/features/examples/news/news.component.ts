import { Component, OnInit, Inject, PLATFORM_ID,ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { Feature } from './feature'; 
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../example-modal /model.module';
import { ModelComponent } from '../example-modal /model.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrls: ['./newsComponent.css'],
  imports: [CommonModule, RouterModule,FormsModule,ModelComponent,HeaderComponent,FooterComponent] ,
  encapsulation: ViewEncapsulation.None 
})
export class NewsComponent implements OnInit {
  newsItem: Feature | undefined;



  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;


  features: Feature[] = [
    {
      type: 'CRUD',
     
      image: '../../../../assets/news/28.avif',
      description: 'Windfall gains tax on oil production, diesel-petrol export removed',
      link: '1',
      content: 'The government on Monday (December 2) withdrew the windfall gains tax on domestic production of crude oil and export of diesel, petrol, and aviation turbine fuel (ATF), scrapping the levy that was introduced 30 months ago amid a surge in the prices of crude oil and key fuels in the international market in the wake of Russia’s invasion of Ukraine.Apprehensions about the availability of the fuels in the domestic market amid the global energy turmoil at the time also contributed to the decision to impose the levy.But a lot has changed since then. After the initial shock and supply concerns due to the war in Ukraine, the global oil and fuel flows have shifted and stabilised. International crude oil and fuel prices are significantly lower and there is a robust supply of fuels in the domestic market. Primarily due to these reasons, the windfall gains tax was not generating significant revenue. In fact, the levy was already nil when the government decided to put this tax to rest.'
    },
    {
      type: 'CRUD',
      description: 'Bill Gates says ‘India is a laboratory to try things’; social media erupts, calls it ‘colonial hangover’',
      image: '../../../../assets/news/4.jpg',
      link: '2',
      content: 'Bill Gates recent comments on India in a podcast have taken social media by storm. In a podcast with Reid Hoffman, he called India a “kind of laboratory to try things.” His comments have sparked strong reactions on social media among Indians.A user shared a 59-second clip from the video on the micro-blogging platform X. He captioned his post, saying, “India is a laboratory, and we Indians are Guinea Pigs for Bill Gates. This person has managed everyone from the Government to opposition parties to the media. His office operates here without FCRA, and our education system has made him a hero! I dont know when we will wake up!.In the podcast, Bill Gates says, “India is an example of a country where there is plenty of things that are difficult there - the health, nutrition, education is improving, and they are stable enough and generating their own government revenue enough that its very likely that 20 years from now people will be dramatically better off and its kind of a laboratory to try things that then when you prove them out in India, you can take to other places.'
       },
    

       {
        type: 'CRUD',
        description: 'Research security should be a national priority',
        image:'../../../../assets/news/20.jpg',
        link: '3',
        content: 'As India aims to achieve its development objectives by 2047, the government has laid an emphasis on the role of science and technology in strategic and emerging sectors. Investment in cutting-edge technologies is essential to stay globally competitive, address societal challenges and unlock economic opportunities. Like in many nations, India is building an innovation ecosystem to harness the transformative power of these technologies. However, along with this intensification of research and development (R&D) arises a new challenge — research security.While collaboration and the free exchange of knowledge are fundamental to scientific progress, there are new risks in the rapidly evolving geopolitical landscape. Foreign interference, intellectual property theft, insider threats, cyberattacks, and unauthorised access to sensitive information are concerns for countries investing in advanced technologies. If left unaddressed, they could undermine India’s progress in strategic sectors. Research security, in this context, refers to safeguarding scientific research from threats to confidentiality, economic value, or national interest. India is ramping up investments in strategic technologies which include space, defence, semiconductors, nuclear technology, cybersecurity, biotechnology, clean energy, artificial intelligence, and quantum technology. So, ensuring strategic research outputs remain protected is critical. Any breach of security could compromise national interests, delay technological advancements, and expose sensitive data to exploitation by foreign actors.'


         },
         {
          type: 'CRUD',
          description: 'Nitin Gadkari gets back seat next to Amit Shah in Lok Sabha',
          image:'../../../../assets/news/6.jpg',
          link: '4',
          content: 'Prime Minister Narendra Modi has been allocated seat number one in the Lok Sabha chamber, while the seat opposite to him on the other side of the semicircular front row has been earmarked for Leader of Opposition Rahul Gandhi.Senior Bharatiya Janata Party (BJP) leader and Union minister Nitin Gadkari was earlier allocated division number 58 in the second column, but has now been given seat number four next to Home Minister Amit Shah, according to a circular issued by the Lok Sabha Secretariat',


           },
        


           {
            type: 'CRUD',
            description: 'GM crops can help fight hunger — depending on how they are farmed',
            image:'../../../../assets/news/7.jpeg',
            link: '5',
            content: 'The advent of genetically modified (GM) crops has helped farmers practice sustainable methods while increasing food production. The world’s population is growing, and more food is needed, but expanding agricultural land is not desirable. Cutting forests to plant crops harms fragile ecosystems, and excessive pesticide use depletes soils and pollutes groundwater. GM crops provide a solution.In the 1990s, researchers modified crops like Bt cotton in India and Bt brinjal in Bangladesh, adding a gene from the bacterium Bacillus thuringiensis to make them produce a toxin that kills specific insects. This has reduced the need for chemical pesticides, benefiting both the environment and farmers health.These crops also help increase yields by preventing insect damage, allowing for more efficient land use. However, concerns remain about long-term effects, including pest resistance. To prevent this, integrated pest management and crop rotation are essential.Additionally, there are concerns about biodiversity. If GM crops crossbreed with wild relatives, it could lead to unintended ecological consequences. Proper regulation and monitoring are critical to ensuring GM crops are used responsibly.In conclusion, GM crops offer benefits in terms of sustainability and food security but must be managed carefully to minimize risks and protect the environment.',
             },





       {
        type: 'CRUD',
        description: 'Indian astronauts selected for joint ISRO-NASA mission to International Space Station complete initial training',
        image:'../../../../assets/news/8.jpeg',
        link: '6',
        content: 'The Indian Space Research Organisation (ISRO) announced on Friday, November 29, 2024, that Indian astronauts Group Captain Shubhanshu Shukla and Group Captain Prasanth Balakrishnan Nair have successfully completed the initial phase of their training for the upcoming Axiom-4 mission to the International Space Station (ISS).ISRO emphasized that this training is part of a joint ISRO-NASA effort to send astronauts to the ISS. The two astronauts, selected for the mission, have been assigned specific roles for the Axiom Mission 4 (Ax-4). Group Captain Shubhanshu Shukla will serve as the Prime astronaut, while Group Captain Prasanth Balakrishnan Nair has been designated as the Backup astronaut.The training process began in the first week of August 2024, when the two astronauts, known as Gaganyatris, commenced their preparation in the United States. ISRO confirmed that the initial phase of their training has been completed successfully, marking a key milestone in the mission.The Axiom-4 mission is a significant step for both ISRO and NASA as they work together to advance space exploration. The astronauts will undergo more advanced training in the coming months as they prepare for their journey to the ISS, scheduled for 2025. This collaboration is expected to further strengthen India’s capabilities in space exploration and contribute to global efforts in scientific research aboard the ISS',


         },


       {
        type: 'CRUD',
        description: 'Tax cuts may have saved ₹3 lakh crore for India’s largest corporates: Data ',
        image:'../../../../assets/news/9.jpg',
        link: '7',
        content: 'Taxed at a significantly lower rate following the introduction of the concessional tax regime in 2019, India’s largest corporates may have saved over ₹3 lakh crore in tax payments since then. This comes in addition to more than ₹8 lakh crore in revenue foregone through various deductions granted to companies over the decade since 2012-13 (FY13).Experts suggest that while the tax cuts reflect the need to rationalize tax incentives, they also raise concerns about the broader fiscal implications. A significant decline in the corporate tax-to-GDP ratio could limit the government’s capacity to finance additional development expenditure. While the reductions were aimed at boosting corporate profitability and attracting investment, the decrease in tax revenue might constrain the government’s ability to fund critical areas like infrastructure, healthcare, and education.The revenue forgone through tax incentives and lower rates over the years could potentially result in a larger fiscal deficit unless offset by increased tax collections elsewhere. There is an ongoing debate about whether the benefits to corporations from the tax cuts are outweighing the potential long-term costs to the government’s finances. The challenge remains in balancing the promotion of corporate growth and the ability to sustain public investment in essential development projects',


         },

       {
        type: 'CRUD',
        description: 'World Chess Championship 2024 Game 7 LIVE: Gukesh well ahead of Ding Liren on clock',
        image:'../../../../assets/news/10.jpg',
        link: '8',
        content: 'Indian Grandmaster D. Gukesh is set to face reigning World Chess Champion Ding Liren in the seventh game of the FIDE World Chess Championship. The highly anticipated match is taking place at the World Resorts Sentosa in Singapore on December 3, 2024. This game marks a crucial point in the ongoing championship, with both players vying for the prestigious title.D. Gukesh, a rising star in the chess world, has been steadily climbing the ranks with impressive performances in various international tournaments. His participation in the World Chess Championship has solidified his reputation as one of the game top contenders. Facing the experienced Ding Liren, who has held the title of World Chess Champion since 2023, will be a major challenge for Gukesh, who is known for his aggressive and sharp style of play.Ding Liren, a Chinese chess grandmaster, is no stranger to high-pressure situations. Having claimed the World Chess Championship title after a dramatic victory over reigning champion Magnus Carlsen, Ding has proven himself as a formidable opponent on the global stage. His calm and calculated approach to the game contrasts with Gukesh’s bold strategies, making this match a fascinating clash of styles.The seventh game of the championship is expected to be a pivotal moment in the contest, with both players looking to gain an upper hand. As the championship continues in Singapore, chess enthusiasts around the world are eagerly watching the developments between these two elite players.',
         },

       {
        type: 'CRUD',
        description: 'Modi attends special screening of ‘The Sabarmati Report’',
        image:'../../../../assets/news/11.jpg',
        link: '9',
        content:'On Monday, December 2, 2024, Prime Minister Narendra Modi attended a special screening of a film produced by filmmaker Ektaa Kapoor, which is based on the tragic burning of the Sabarmati Express in Godhra, Gujarat, on February 27, 2002. The incident resulted in the deaths of 59 people, including 27 women and 10 children, who were returning from a religious ceremony in Ayodhya.The film, featuring actors Vikrant Massey, Raashi Khanna, and Ridhi Dogra, is said to portray the events surrounding the attack and its aftermath. The screening took place at the Balayogi Auditorium in the Parliament Library building, and was attended by several prominent members of Parliament and government officials. Prime Minister Modi’s presence at the event highlighted the film’s significance in shedding light on a pivotal moment in India’s modern history. The tragic incident in Godhra and the subsequent communal violence in Gujarat have remained subjects of intense political and social debate, and the film aims to explore the complex emotions and ramifications surrounding those events.The screening has sparked discussions about the role of cinema in depicting sensitive historical events, especially in the context of national unity and communal harmony. By bringing attention to the Godhra tragedy, the film contributes to ongoing conversations about its impact on Indian society and politics. The event has generated significant public interest, reflecting the enduring relevance of the incident in contemporary political discourse.'
         },

       {
        type: 'CRUD',
        description: 'Economic and political power are intertwined in Maharashtra: Data',
        image:'../../../../assets/news/12.jpg',
        link: '10',
        content: 'Dynastic politics plays a pivotal role in shaping Maharashtra’s political and economic landscape, with powerful political families exerting significant control over key sectors like sugar production, education, and real estate. This concentration of power in the hands of a few influential families not only reinforces their political dominance but also has far-reaching consequences for governance and development in the state.These political families often use their control over crucial industries to expand their influence, consolidating both economic and political power. For instance, the sugar industry, which is a major economic driver in rural Maharashtra, is largely dominated by political families, leading to a symbiotic relationship between politics and business. This interlinking of politics and economics allows these families to maintain a strong hold over voter bases and secure continued political success, often at the expense of broader economic reforms and transparent governance.Furthermore, the lack of transparent political funding mechanisms in Maharashtra compels political parties to rely heavily on internal networks, personal connections, and private resources. This reliance on informal funding sources exacerbates the influence of dynastic politics, as these families leverage their wealth and power to sustain their political ambitions. The absence of accountability in the funding process has created an environment where political decisions are often shaped by personal interests, undermining the potential for fair governance and equitable development.As dynastic politics remains deeply embedded in Maharashtra’s political culture, it continues to challenge efforts for systemic reform and inclusive progress in the state.',
         },




        //  2



        {
          type: 'CRUD',
          description: 'Upalokayukta expresses concern over rampant laterite quarrying in Mangaluru, seeks detailed report',
          image:'../../../../assets/news/13.jpeg',
          link: '11',
          content: 'Expressing concern over the unchecked quarrying of laterite stones in Badaga Mijar and surrounding areas of Moodabidri, Upalokayukta B. Veerappa sought a detailed report from the Department of Mines and Geology. He requested information on the extent of quarrying, its impact on the environment, and the actions taken to regulate the activities.The issue came to light following complaints from local residents about the large-scale extraction of laterite stones in the region. In response, Mr. Veerappa took a team of officials, including Additional Registrar K. M. Rajashekar, Deputy Registrars K.M. Basavarajappa and N.M. Aravind, and Superintendent of Police (Lokayukta) M.A. Nataraj, for a surprise visit to the quarrying areas in Badaga Mijar on December 3, 2024.During the visit, the team aimed to assess the ground situation and evaluate whether the quarrying operations were being carried out in compliance with legal and environmental norms. The Upalokayuktas visit underscores the growing concern over unregulated quarrying activities and their potential environmental consequences, particularly in ecologically sensitive regions. The visit also highlighted the importance of effective monitoring and enforcement of regulations in the mining sector.This inquiry comes amid increasing complaints from locals, who fear that the unchecked quarrying could lead to long-term environmental damage. Mr. Veerappa’s call for a report from the Department of Mines and Geology reflects the need for immediate action to address these concerns and ensure that quarrying activities are properly regulated.'
           },

           {
            type: 'CRUD',
            description: 'In our fight against climate change, could the seas turn the tide?',
            image:'../../../../assets/news/14.jpg',
            link: '12',
            content: 'The ocean, often referred to as the Earth vast blue lung, has played a critical yet underappreciated role in moderating the planet climate. It has absorbed about 25% of anthropogenic carbon dioxide emissions and over 90% of the excess heat generated by greenhouse gases, buying humanity valuable time against the escalating impacts of climate change.However, this immense capacity for absorption comes at a significant cost. Ocean acidification, disrupted biogeochemical cycles, pollution, and severe harm to marine ecosystems are some of the consequences. Acidification, for example, threatens calcifying organisms like corals and shellfish, while rising temperatures alter ocean circulation patterns and deoxygenate crucial marine habitats. These disruptions create cascading effects through ecosystems, compromising the services they provide, such as supporting fisheries and aiding in carbon sequestration.While the ocean ability to absorb carbon and heat is essential in the fight against climate change, these processes are slow and come with ecological consequences. The long-term damage to marine ecosystems threatens not only biodiversity but also the ocean capacity to continue moderating the climate. As the ocean reaches its limits, the need for comprehensive climate action becomes more urgent, highlighting the critical balance between environmental preservation and addressing the root causes of global warming.'
             },


             {
              type: 'CRUD',
              description: 'Norway stops deep-sea mining, for now',
              image:'../../../../assets/news/15.jpg',
              link: '13',
              content: 'A small left-wing environmentalist political party in Norway successfully blocked plans to mine the seabed at the bottom of the Arctic on Sunday. The Socialist Left Party (SV), which is not part of the governing coalition but supports the minority government, demanded that the government scrap its first licensing round for seabed mining in exchange for backing the national budget. Kirsti Bergstoe, leader of the SV, confirmed the party’s victory, stating, "We are stopping plans to open mining on the seabed." The decision marks a significant victory for environmental groups and reflects growing concern over the potential environmental impacts of seabed mining, particularly in the sensitive Arctic region. The government’s original plan involved offering licenses for seabed mining, a controversial proposal aimed at tapping into mineral resources in the deep sea. However, the SV party support for the budget was conditional on the abandonment of this plan, underscoring the party commitment to protecting marine ecosystems and combating climate change.The move has sparked debates over the balance between economic development and environmental protection in Norway, a country known for its strong commitment to environmental sustainability. With growing pressure from environmental advocates, the government now faces renewed scrutiny over its approach to Arctic resource exploitation.'
               },



               {
                type: 'CRUD',
                description: 'T.N. govt. to move resolution in Assembly to cancel tungsten mining rights awarded in Madurai district',
                image:'../../../../assets/news/16.jpg',
                link: '14',
                content: 'The Tamil Nadu government is set to introduce a special resolution in the State Legislative Assembly on December 9, urging the Union government to cancel the tungsten mining rights granted to Hindustan Zinc Limited in Madurai district. The resolution will also call on the Union government to refrain from auctioning mining rights without the consent of the respective State governments. This move reflects growing concerns over the potential environmental and local impacts of mining activities in the region. The agenda for the upcoming Assembly session, scheduled to begin on December 9, was finalized on Monday, December 2, 2024. The resolution is expected to spark a debate on the balance between economic development through mining and the protection of state-level interests and environmental concerns.Tamil Nadu’s strong stance on this issue underscores its commitment to safeguarding local resources and ensuring that mining projects align with the state priorities and environmental standards. The resolution could potentially lead to greater scrutiny of the central government role in granting mining rights and set a precedent for greater state involvement in such decisions.'
                 },



                 {
                  type: 'CRUD',
                  description: 'Amaravathy water level reaches the brim, despite releasing 4.5 tmc of surplus water',
                  image:'../../../../assets/news/17.jpg',
                  link: '15',
                  content: 'The water level in the Amaravathy reservoir has reached its brim, despite the release of 4.5 TMC (thousand million cubic feet) of surplus water. The reservoir, which has a storage capacity of 4 TMC, is now at full capacity, raising concerns about the situation in the surrounding areas. The release of surplus water was carried out to manage the inflow and prevent flooding, but even with these measures, the reservoir has filled to its maximum capacity due to continued rainfall and water inflow from upstream sources. The situation is being closely monitored by authorities, who are working to manage the water levels and ensure safety in the downstream regions.The Amaravathy reservoir, located in Tamil Nadu, plays a crucial role in supplying water for irrigation and drinking purposes in the region. Its current status highlights the challenges faced by water management authorities, particularly during periods of heavy rainfall and fluctuating water levels. As the water level has now reached the brim, there are concerns about potential overflow and the impact on nearby communities and infrastructure.Efforts are underway to assess the situation and take necessary precautions, with the release of additional water being considered if the inflow continues to rise. The authorities are also coordinating with local officials to ensure proper flood management and mitigate any risks posed by the high water levels.'
                   },




                   {
                    type: 'CRUD',
                    description: 'India’s ‘One Nation, One Subscription’ plan | Explained',
                    image:'../../../../assets/news/21.jpg',
                    link: '16',
                    content: 'On November 25, 2024, the Union Cabinet approved the Indian government’s One Nation, One Subscription (ONOS) scheme, a significant step aimed at providing equitable access to scholarly journals across all public institutions in the country. The ONOS scheme aims to streamline access to academic and research resources, ensuring that students, researchers, and educators in government-funded institutions can access high-quality academic publications without financial barriers.Under this initiative, public institutions, including universities, research centers, and libraries, will have centralized access to a wide range of scholarly journals, articles, and research papers, which are often expensive and inaccessible for many institutions. This will help bridge the knowledge gap between institutions in different regions and improve research and learning outcomes.The ONOS scheme is designed to promote inclusivity in education and research by making global academic content more accessible to a broader demographic of students and scholars. It is expected to enhance the quality of education and research in India, particularly in public universities, which often struggle with limited access to cutting-edge academic resources.By consolidating subscriptions into a single national framework, the government hopes to reduce costs, eliminate redundancies, and ensure that research and education in India remain at par with global standards. This initiative could also position India as a leader in fostering open access to academic resources, contributing to the global push for knowledge democratization.'
                    
                  },



                     {
                      type: 'CRUD',
                      description: 'Man City boss Guardiola has a friendly reminder',
                      image:'../../../../assets/news/22.jpg',
                      link: '17',
                      content: 'Manchester City manager Pep Guardiola responded to taunts from Liverpool fans after his side 0-2 defeat at Anfield on Sunday, reminding them of his six Premier League titles in the past seven seasons. As City endured their sixth loss in seven matches, leaving them 11 points adrift of Liverpool at the top of the table, the home crowd chanted, “you’re getting sacked in the morning.”In the face of the ridicule, Guardiola, known for his calm demeanor, took the opportunity to highlight his remarkable record of success with City, emphasizing his achievements despite the current struggles. The defeat at Anfield added to City ongoing challenges this season, with their poor form leaving them further behind in the title race.Guardiola response to the chants underscored his confidence in his abilities and achievements, even amid a tough period for the club. His focus remains on addressing City current issues and pushing for a turnaround, while also keeping perspective on his legacy in English football. Despite the setback, Guardiola leadership remains crucial as Manchester City looks to regroup and mount a challenge in the second half of the season.'
                       },

                       {
                        type: 'CRUD',
                        description: 'Joe Biden pardons his son Hunter in 2 cases despite previous pledges not to',
                        image:'../../../../assets/news/25.jpeg',
                        link: '18',
                        content: 'President Joe Biden pardoned his son, Hunter, on Sunday (December 2, 2024) night, sparing the younger Biden a possible prison sentence for federal felony gun and tax convictions and reversing his past promises not to use the extraordinary powers of the presidency for the benefit of his family members.The Democratic President had previously said he would not pardon his son or commute his sentence after his convictions in the two cases in Delaware and California. The move comes weeks before Hunter Biden was set to receive his punishment after his trial conviction in the gun case and guilty plea on tax charges, and less than two months before President-elect Donald Trump is set to return to the White House.'
                         },










                         //dd
                         {
                          type: 'CRUD',
                          description: 'Parupalli Kashyap Interview | We have superstars and money, but badminton as a sport hasn’t grown',
                          image:'../../../../assets/news/23.jpg',
                          link: '19',
                          content: 'A two-time winner at the Syed Modi India International Super 300, one of only two players to do so, Parupalli Kashyap knows the city and the tournament as well as anyone can. He has also seen the fan frenzy for the biggest stars at the BBD Academy, being the recipient of it more than once. A bonafide star in his playing days, with a career-high ranking of sixth in the world, Kashyap was known for being outspoken both in praise and criticism. Back in the city as a coach this time, the 38-year-old was as vocal about the stagnation in Indian badminton and the way ahead, in an exclusive chat with The Hindu:A little disappointed because she didn’t capitalise on the conditions in the third game. She was quite brilliant and she is still coming up, so quarterfinals was a good show. She was better than her opponent, reading the conditions also well but maybe there were some jitters. Self-belief has to improve but it will come, winning a few quarters and semifinal matches will help. It looks very positive, she is one of the good stroke players and has powerful smashes. Sometimes you need to dumb down the game a little and in moments when you take lead and put pressure on the opponent, she faltered in those.'
                           },
    
                           {
                            type: 'CRUD',
                            description: 'World Chess Championship 2024: Gukesh-Ding match-up is more of a psychological duel',
                            image:'../../../../assets/news/24.jpg',
                            link: '20',
                            content:'The World championship in Singapore has suddenly taken on the flavour of a psychological duel instead of a purely chess match. In the last few games, we have started to see a very clear trend where Gukesh is trying to provoke his opponent into a battle, is ready to decline draws and take risks. Ding, on the other hand, seems to be pessimistic about his position and often goes for the safest line on the first opportunity, in the hope that Gukesh might overreach.In Game 6, Ding Liren chose the London System which he had used to great effect in the last World title match against Ian Nepomniachtchi. Gukesh’s preparation was excellent until move 16. On the next move, he had a couple of easy ways to make a draw, but chose a slightly inaccurate one that allowed Ding to get the unbalanced position he was presumably seeking.'


                           },
                             {
                              type: 'CRUD',
                              description: 'Sensex, Nifty rally for 3rd day propelled by buying in blue-chip stocks, firm global peers',
                              image:'../../../../assets/news/18.jpg',
                              link: '21',
                              content: 'Benchmark indices Sensex and Nifty rallied for the third consecutive session on Tuesday, December 3, 2024, driven by buying interest in blue-chip stocks such as HDFC Bank, Reliance Industries, and strong trends in global markets.The BSE benchmark Sensex rose by 597.67 points, or 0.74%, to close at 80,845.75. During the day, the index surged by as much as 701.02 points, or 0.87%, reaching an intra-day high of 80,949.10. The positive momentum was fueled by gains in key sectors, particularly banking and energy stocks, which saw increased investor confidence.The rally in the Sensex was mirrored by the broader market, with the Nifty also showing significant gains. Global markets provided further support, as firm trends in major international indices contributed to the optimism in Indian equities.Investors were buoyed by the stability in global financial markets, which helped offset concerns about domestic challenges. The buying spree in large-cap stocks, particularly HDFC Bank and Reliance Industries, further underpinned the rally, signaling continued confidence in India’s economic recovery and market outlook. This extended rally underscores the growing optimism in Indian markets as investors continue to respond to favorable global cues and strong domestic corporate performance.'
                               },
        
                               {
                                type: 'CRUD',
                                description: 'What India’s AI Safety Institute could do',
                                image:'../../../../assets/news/19.jpg',
                                link: '22',
                                content: 'In October, the Ministry of Electronics and Information Technology (MeitY) held meetings with industry stakeholders and experts to discuss the establishment of an AI Safety Institute under the IndiaAI Mission. This initiative followed closely on the heels of Prime Minister Narendra Modi’s visit to the U.S., the Quad Leaders’ Summit, and the United Nations Summit of the Future. AI was prominently featured on the agenda in the lead-up to the Summit, with a high-level UN advisory panel releasing a report on "Governing AI for Humanity."Given India’s recent leadership at the G20 and its active participation in the Global Partnership on Artificial Intelligence (GPAI), policymakers have a unique opportunity to position India as a key unifying voice for the global majority in the governance of AI. By emphasizing India’s role as a bridge between developed and developing nations, India can play a central part in shaping the global conversation on AI governance and safety.The design of the AI Safety Institute should focus on strengthening domestic capabilities, leveraging India’s comparative advantages in areas such as software development, data analytics, and talent pool. Additionally, it should aim to integrate India into international initiatives and frameworks that seek to ensure AI development is aligned with ethical standards and serves the broader interests of humanity. This approach could help India lead by example in global AI governance, advocating for equitable, inclusive, and responsible technological advancement.'
                                 },





      
  ];


  allItems: Feature[] = this.features; 

  ngOnInit(): void {
 
    const newsLink = this.route.snapshot.paramMap.get('id');
     

    if (newsLink) {
      this.newsItem = this.getNewsItem(newsLink);
    }

    
  }

  getNewsItem(link: string): Feature | undefined {
    return this.features.find((item) => item.link === link);
  }

  loadScript(name: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const src = document.createElement('script');
      src.type = 'text/javascript';
      src.src = name;
      src.async = false;
      document.getElementsByTagName('head')[0].appendChild(src);
    }
  }
  selectedItem: Feature | undefined;
  openModal(item: Feature): void {
    this.selectedItem = item;  
  }
  
}
