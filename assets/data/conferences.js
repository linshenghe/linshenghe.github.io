const conferenceEntries = [
  {
    year: "2026",
    type: "international",
    city: { en: "Hollywood, CA, United States", zh: "美国加州好莱坞" },
    coordinates: { lat: 34.10, lon: -118.33 },
    title: {
      en: "American Society for Public Administration (ASPA) Annual Conference",
      zh: "American Society for Public Administration (ASPA) Annual Conference",
    },
    paper: {
      en: "Anti-Corruption, Trust, and Compliance in Public Health Crises: Cross-Country Evidence",
      zh: "Anti-Corruption, Trust, and Compliance in Public Health Crises: Cross-Country Evidence",
    },
  },
  {
    year: "2026",
    type: "international",
    city: { en: "Perth, Australia", zh: "澳大利亚珀斯" },
    coordinates: { lat: -31.95, lon: 115.86 },
    title: {
      en: "International Research Society for Public Management (IRSPM) Conference",
      zh: "International Research Society for Public Management (IRSPM) Conference",
    },
    paper: {
      en: "Decentralising Government Reputation: Central Signals, Local Differentiation, and Peer Network Effects",
      zh: "Decentralising Government Reputation: Central Signals, Local Differentiation, and Peer Network Effects",
    },
  },
  {
    year: "2025",
    type: "international",
    city: { en: "Seoul, Korea", zh: "韩国首尔" },
    coordinates: { lat: 37.57, lon: 126.98 },
    title: {
      en: "Public Management Research Conference (PMRC)",
      zh: "Public Management Research Conference (PMRC)",
    },
    paper: {
      en: "Not All Ties Are Equal: Actor- and Type-Specific Social Capital in Coproduction",
      zh: "Not All Ties Are Equal: Actor- and Type-Specific Social Capital in Coproduction",
    },
  },
  {
    year: "2025",
    type: "international",
    city: { en: "Beijing, China", zh: "中国北京" },
    coordinates: { lat: 39.90, lon: 116.41 },
    title: {
      en: "The International Conference on China Policy Studies (ICCPS)",
      zh: "The International Conference on China Policy Studies (ICCPS)",
    },
    paper: {
      en: "Not All Ties Are Equal: Actor- and Type-Specific Social Capital in Coproduction",
      zh: "Not All Ties Are Equal: Actor- and Type-Specific Social Capital in Coproduction",
    },
  },
  {
    year: "2024",
    type: "international",
    city: { en: "Seattle, United States", zh: "美国西雅图" },
    coordinates: { lat: 47.61, lon: -122.33 },
    title: {
      en: "Public Management Research Conference (PMRC)",
      zh: "Public Management Research Conference (PMRC)",
    },
    paper: {
      en: "In the Shadow of Memory: Experimental Insights into Government Reputation in the Covid-19 Age",
      zh: "In the Shadow of Memory: Experimental Insights into Government Reputation in the Covid-19 Age",
    },
  },
  {
    year: "2024",
    type: "international",
    city: { en: "Beijing, China", zh: "中国北京" },
    coordinates: { lat: 39.90, lon: 116.41 },
    title: {
      en: "The International Conference on China Policy Studies (ICCPS)",
      zh: "The International Conference on China Policy Studies (ICCPS)",
    },
    paper: {
      en: "Aligning Behavioral Assumptions Underlying Policy Instruments: A Principle for Designing Policy Mixes Targeting Behavioral Change",
      zh: "Aligning Behavioral Assumptions Underlying Policy Instruments: A Principle for Designing Policy Mixes Targeting Behavioral Change",
    },
    note: { en: "Best Paper Award", zh: "最佳论文奖" },
  },
  {
    year: "2023",
    type: "international",
    city: { en: "Hong Kong, China", zh: "中国香港" },
    coordinates: { lat: 22.32, lon: 114.17 },
    title: {
      en: "Asia-Pacific Public Policy Network Conference (AP-PPN)",
      zh: "Asia-Pacific Public Policy Network Conference (AP-PPN)",
    },
    paper: {
      en: "Public Risk Perception during the COVID-19 Pandemic: A Meta-analysis of Antecedents and Behavioral Consequences",
      zh: "Public Risk Perception during the COVID-19 Pandemic: A Meta-analysis of Antecedents and Behavioral Consequences",
    },
  },
  {
    year: "2022",
    type: "international",
    city: { en: "Shanghai, China", zh: "中国上海" },
    coordinates: { lat: 31.23, lon: 121.47 },
    title: {
      en: "Asian Association for Public Administration Annual Conference (AAPA)",
      zh: "Asian Association for Public Administration Annual Conference (AAPA)",
    },
    paper: {
      en: "Matching behavioral assumptions behind policy tools; The Effect of Memory on Government Reputation Evaluation",
      zh: "Matching behavioral assumptions behind policy tools；The Effect of Memory on Government Reputation Evaluation",
    },
  },
  {
    year: "2021",
    type: "international",
    city: { en: "Online", zh: "线上" },
    title: {
      en: "Association for Public Policy Analysis and Management Fall Research Conference (APPAM)",
      zh: "Association for Public Policy Analysis and Management Fall Research Conference (APPAM)",
    },
    paper: {
      en: "Influencing Public Awareness: Policy Design By Tool Selection, Framing, and Narratives",
      zh: "Influencing Public Awareness: Policy Design By Tool Selection, Framing, and Narratives",
    },
    note: { en: "Panel Organizer", zh: "Panel Organizer" },
  },
  {
    year: "2020",
    type: "international",
    city: { en: "Online", zh: "线上" },
    title: {
      en: "International Public Management Network Conference (IPMN)",
      zh: "International Public Management Network Conference (IPMN)",
    },
    paper: {
      en: "Serving Different People with Different Dishes: The Effects of Social constructions of Target Population on Policy Narrative Strategies",
      zh: "Serving Different People with Different Dishes: The Effects of Social constructions of Target Population on Policy Narrative Strategies",
    },
  },
  {
    year: "2019",
    type: "international",
    city: { en: "Location to be confirmed", zh: "地点待补充" },
    title: {
      en: "Asia-Pacific Public Policy Network Conference (AP-PPN)",
      zh: "Asia-Pacific Public Policy Network Conference (AP-PPN)",
    },
    paper: {
      en: "Does Policy Familiarity Breed Public Service Motivation? The Influence of Policies on the PSM of Future Public Service Providers",
      zh: "Does Policy Familiarity Breed Public Service Motivation? The Influence of Policies on the PSM of Future Public Service Providers",
    },
  },
  {
    year: "2025",
    type: "domestic",
    city: { en: "Dalian, China", zh: "大连" },
    coordinates: { lat: 38.91, lon: 121.61 },
    title: { en: "11th China Public Management Annual Conference", zh: "第十一届中国公共管理学术年会" },
    paper: {
      en: "The Role of Emotional Memory in Shaping Government Reputation",
      zh: "The Role of Emotional Memory in Shaping Government Reputation",
    },
  },
  {
    year: "2025",
    type: "domestic",
    city: { en: "Nanning, China", zh: "南宁" },
    coordinates: { lat: 22.82, lon: 108.37 },
    title: { en: "13th Chinese Public Administration Scholars Seminar", zh: "第十三届华人公共管理学者研讨会" },
    paper: {
      en: "The Role of Emotional Memory in Shaping Government Reputation",
      zh: "The Role of Emotional Memory in Shaping Government Reputation",
    },
  },
  {
    year: "2023",
    type: "domestic",
    city: { en: "Shanghai, China", zh: "上海" },
    coordinates: { lat: 31.23, lon: 121.47 },
    title: { en: "China Public Management Annual Conference", zh: "中国公共管理学术年会" },
    paper: {
      en: "A Meta-analysis of the Antecedents and Consequences of Public Risk Perception: Evidence from COVID-19",
      zh: "公众风险感知前因与后果的元分析：以新冠肺炎疫情为例",
    },
  },
  {
    year: "2021",
    type: "domestic",
    city: { en: "Online", zh: "线上" },
    title: { en: "5th Young Scholars Forum of Public Administration Review", zh: "《公共行政评论》第五届青年学者论坛" },
    paper: {
      en: "A Policy Feedback Explanation of Government Procurement of Facial Recognition Technology: A Case Comparison of Hangzhou and San Francisco",
      zh: "政府采购人脸识别技术的政策反馈解释：基于杭州与旧金山的案例比较",
    },
    note: { en: "Best Paper Award", zh: "最佳论文奖" },
  },
  {
    year: "2019",
    type: "domestic",
    city: { en: "Wuhan, China", zh: "武汉" },
    coordinates: { lat: 30.59, lon: 114.31 },
    title: { en: "China Public Management Annual Conference and Young Scholars Forum", zh: "中国公共管理学术年会暨第五届公共管理青年学者论坛" },
    paper: {
      en: "Narrative Strategies and Logic of Public Communication in China's Nuclear Power Plant Siting Policy Process: A Comparative Case Study",
      zh: "我国核电选址政策过程中公众沟通的叙事策略与逻辑：基于双案例比较研究",
    },
  },
];
