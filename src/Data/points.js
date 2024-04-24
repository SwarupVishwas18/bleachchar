const characters = [
  {
    id: 1,
    name: "Rukia Kuchiki",
    score_range: { min: 130, max: 159 },
    bankai_name: "Hakka no Togame",
    zanpakuto_name: "Sode no Shirayuki",
    height: "144 cm",
    weight: "33 kg",
    ranking: 1,
    position: "Former Lieutenant of the 13th Division",
    description:
      "Rukia Kuchiki is a skilled and disciplined Soul Reaper. Her Zanpakuto, Sode no Shirayuki, allows her to create and control ice. Rukia is known for her quick thinking and determination. Her strength lies in her intelligence and versatility in battle. However, her weakness is her occasional self-doubt and hesitance to fully unleash her power.",
    isHero: true,
    image_link:
      "https://dthezntil550i.cloudfront.net/xy/latest/xy2006131045118420012671766/aa2cdf88-2b06-4bba-8cb7-31c3d3ba0243.png",
  },
  {
    id: 2,
    name: "Shinji Hirako",
    score_range: { min: 160, max: 189 },
    bankai_name: "Unknown",
    zanpakuto_name: "Unknown",
    height: "186 cm",
    weight: "69 kg",
    ranking: 2,
    position: "Former Captain of the 5th Division",
    description:
      "Shinji Hirako is a cunning and unconventional Soul Reaper. He possesses the power of a Visored, allowing him to combine his Soul Reaper abilities with those of a Hollow. Shinji's strength lies in his mastery of illusion-based techniques and his strategic mindset. However, his weakness is his laid-back attitude and his tendency to underestimate his opponents.",
    isHero: true,
    image_link:
      "https://static.wikia.nocookie.net/bleach/images/4/4f/Ep206ShinjiHirako.png/revision/latest/scale-to-width-down/1000?cb=20231105210107&path-prefix=en",
  },
  {
    id: 3,
    name: "Byakuya Kuchiki",
    score_range: { min: 190, max: 219 },
    bankai_name: "Senbonzakura Kageyoshi",
    zanpakuto_name: "Senbonzakura",
    height: "185 cm",
    weight: "64 kg",
    ranking: 3,
    position: "Captain of the 6th Division",
    description:
      "Byakuya Kuchiki is a stoic and disciplined captain. His Zanpakuto, Senbonzakura, allows him to create thousands of razor-sharp blades. Byakuya is known for his exceptional swordsmanship and his unwavering loyalty to the Soul Society. His strength lies in his precise and swift strikes. However, his weakness is his initial reluctance to rely on others and his strict adherence to rules.",
    isHero: true,
    image_link:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhsrMJuuUBZrSO74zmBB6r0XqRMi6QNmz6qTUxnQoBYtyzIv4dblptg7MnxtSTn7j6-PAfXGk7CzPT7lnvi4GWqnWamuNiluo4pZc4Pdwlm1ORXkN4C91BuJup2dUQEJFAQ2vnNtw61vu6zlfrF4NG8nXS730i_d376IoAbBjDm9tBUzXqA9BUQ0lL-sg=w1200-h630-p-k-no-nu",
  },
  {
    id: 4,
    name: "Toshiro Hitsugaya",
    score_range: { min: 220, max: 249 },
    bankai_name: "Daiguren Hyorinmaru",
    zanpakuto_name: "Hyorinmaru",
    height: "133 cm",
    weight: "28 kg",
    ranking: 4,
    position: "Captain of the 10th Division",
    description:
      "Toshiro Hitsugaya is a prodigious and serious-minded captain. His Zanpakuto, Hyorinmaru, allows him to control ice and manipulate water. Toshiro is known for his tactical skills and his ability to maintain a calm demeanor even in the heat of battle. His strength lies in his mastery of ice-based attacks. However, his weakness is his inexperience with more complex forms of combat and his tendency to overthink.",
    isHero: true,
    image_link:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjAW1CU7zMueJG5Vf-VrGW-5LeM5tTYeKaop5-Sqcqp_NCvVHeBWuyKZFPftt533QkaZQ&usqp=CAU",
  },
  {
    id: 5,
    name: "Kenpachi Zaraki",
    score_range: { min: 250, max: 279 },
    bankai_name: "Unknown",
    zanpakuto_name: "Nozarashi",
    height: "202 cm",
    weight: "122 kg",
    ranking: 5,
    position: "Former Captain of the 11th Division",
    description:
      "Kenpachi Zaraki is a fierce and battle-hungry Soul Reaper. He is known for his immense physical strength and his love for combat. Kenpachi's strength lies in his raw power and his ability to withstand even the most devastating attacks. However, his weakness is his lack of formal training and his overreliance on brute force.",
    isHero: true,
    image_link:
      "https://staticg.sportskeeda.com/editor/2022/12/eda1e-16702299203956-1920.jpg",
  },
  {
    id: 6,
    name: "Grimmjow Jaegerjaquez",
    score_range: { min: 280, max: 309 },
    bankai_name: "Unknown",
    zanpakuto_name: "Pantera",
    height: "190 cm",
    weight: "80 kg",
    ranking: 6,
    position: "Former Espada",
    description:
      "Grimmjow Jaegerjaquez is a ruthless and aggressive Arrancar. He possesses incredible speed and strength, making him a formidable opponent. Grimmjow's strength lies in his relentless assault and his unwavering determination. However, his weakness is his impulsive nature and his disregard for strategy.",
    isHero: false,
    image_link:
      "https://cdn.epicstream.com/images/ncavvykf/epicstream/316e169a3213f59f0ea05fac879daca1dcbe392e-1200x628.webp?rect=42,0,1116,628&w=700&h=394&dpr=2",
  },
  {
    id: 7,
    name: "Ulquiorra Cifer",
    score_range: { min: 310, max: 339 },
    bankai_name: "Unknown",
    zanpakuto_name: "Murcielago",
    height: "183 cm",
    weight: "64 kg",
    ranking: 7,
    position: "Former Espada",
    description:
      "Ulquiorra Cifer is a calm and analytical Arrancar. He possesses tremendous spiritual power and incredible regenerative abilities. Ulquiorra's strength lies in his superior speed and his capacity for logical thinking. However, his weakness is his lack of emotional understanding and his dismissive attitude towards human emotions.",
    isHero: false,
    image_link:
      "https://static.wikia.nocookie.net/bleach/images/d/df/Ep203UlquiorraProfile.png/revision/latest/scale-to-width-down/1000?cb=20220430040037&path-prefix=en",
  },
  {
    id: 8,
    name: "Sosuke Aizen",
    score_range: { min: 340, max: 369 },
    bankai_name: "Unknown",
    zanpakuto_name: "Kyoka Suigetsu",
    height: "187 cm",
    weight: "74 kg",
    ranking: 8,
    position: "Former Captain of the 5th Division",
    description:
      "Sosuke Aizen is a cunning and manipulative former captain. He possesses one of the most powerful Zanpakuto, Kyoka Suigetsu, which allows him to control the senses of those who see its release. Aizen's strength lies in his strategic planning and his ability to deceive his enemies. However, his weakness is his arrogance and his underestimation of the power of teamwork.",
    isHero: false,
    image_link:
      "https://i.pinimg.com/originals/68/0e/79/680e7911f544f4def49c7a8bc1ad3a57.jpg",
  },
  {
    id: 9,
    name: "Kisuke Urahara",
    score_range: { min: 370, max: 399 },
    bankai_name: "Unknown",
    zanpakuto_name: "Benihime",
    height: "187 cm",
    weight: "72 kg",
    ranking: 9,
    position: "Former Captain of the 12th Division",
    description:
      "Kisuke Urahara is a brilliant and enigmatic former captain. He is known for his vast knowledge and expertise in technology and research. Kisuke's strength lies in his intelligence and his ability to adapt to various situations. However, his weakness is his mysterious nature and his tendency to keep secrets.",
    isHero: true,
    image_link:
      "https://cdn.staticneo.com/w/bleach/thumb/Urahara.jpg/225px-Urahara.jpg",
  },
  {
    id: 10,
    name: "Ichigo Kurosaki",
    score_range: { min: 400, max: 429 },
    bankai_name: "Tensa Zangetsu",
    zanpakuto_name: "Zangetsu",
    height: "174 cm",
    weight: "61 kg",
    ranking: 10,
    position: "Substitute Soul Reaper",
    description:
      "Ichigo Kurosaki is a determined and powerful Soul Reaper. His Zanpakuto, Zangetsu, has multiple forms and grants him incredible speed and strength. Ichigo's strength lies in his unwavering resolve and his ability to protect his loved ones. However, his weakness is his occasional recklessness and his struggle to control his inner Hollow.",
    isHero: true,
    image_link:
      "https://sportshub.cbsistatic.com/i/2021/03/16/8ee93919-3c2e-4335-93ec-0ef34e7a5fd2/ichigo-bleach-1111560.jpg",
  },
  {
    id: 11,
    name: "Yhwach",
    score_range: { min: 430, max: 459 },
    bankai_name: "Unknown",
    zanpakuto_name: "Unknown",
    height: "195 cm",
    weight: "96 kg",
    ranking: 11,
    position: "Former Leader of the Wandenreich",
    description:
      "Yhwach is a formidable and charismatic leader. He possesses the power of the Almighty, which grants him the ability to foresee and alter the future. Yhwach's strength lies in his overwhelming spiritual pressure and his ability to manipulate the fates of others. However, his weakness is his arrogance and his obsession with controlling everything.",
    isHero: false,
    image_link:
      "https://static.wikia.nocookie.net/bleach/images/8/80/Ep371YhwachProfile.png/revision/latest?cb=20221123091409&path-prefix=en",
  },
  {
    id: 12,
    name: "Genryusai Yamamoto",
    score_range: { min: 460, max: 489 },
    bankai_name: "Zanka no Tachi",
    zanpakuto_name: "Ryujin Jakka",
    height: "168 cm",
    weight: "85 kg",
    ranking: 12,
    position: "Captain-Commander of the Gotei 13",
    description:
      "Genryusai Yamamoto is a stern and powerful captain. His Zanpakuto, Ryujin Jakka, is one of the oldest and most powerful fire-based Zanpakuto. Yamamoto's strength lies in his mastery of fire and his centuries of combat experience. However, his weakness is his old age and his susceptibility to exhaustion.",
    isHero: true,
    image_link:
      "https://staticg.sportskeeda.com/editor/2022/11/5e389-16684519345108-1920.jpg",
  },
  {
    id: 13,
    name: "Shunsui Kyoraku",
    score_range: { min: 490, max: 519 },
    bankai_name: "Katen Kyokotsu: Karamatsu Shinju",
    zanpakuto_name: "Katen Kyokotsu",
    height: "187 cm",
    weight: "78 kg",
    ranking: 13,
    position: "Captain of the 1st Division",
    description:
      "Shunsui Kyoraku is a laid-back and carefree captain. His Zanpakuto, Katen Kyokotsu, takes the form of twin swords and possesses unpredictable abilities. Shunsui's strength lies in his unorthodox fighting style and his vast spiritual energy. However, his weakness is his aversion to direct confrontation and his reluctance to use his Bankai.",
    isHero: true,
    image_link:
      "https://static.wikia.nocookie.net/bleach/images/6/68/FTB_Profilowe_Kyoraku.png/revision/latest?cb=20200102075739&path-prefix=pl  ",
  },
];

export default characters;
