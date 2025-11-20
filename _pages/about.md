---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I’m Xiaoyang Wang (王晓阳), a PhD candidate at [Drexel University](https://drexel.edu/) advised by [Prof. Christopher C. Yang](https://cci.drexel.edu/faculty/cyang/) in the Health Informatics Research Group. 

My research centers on **trustworthy AI for healthcare**, with a particular focus on fairness, explainability, and reliability in clinical predictive modeling. I develop algorithms that ensure equitable model performance across demographic subgroups while maintaining high predictive accuracy. Building upon this foundation, I am now exploring **multimodal learning** frameworks that integrate structured EHR data, clinical notes, and medical imaging to construct unified patient representations. In parallel, I am investigating **LLM-based agentic AI systems** that can autonomously reason, coordinate, and adapt in complex medical and health environments. 

Before joining Drexel University for my doctoral studies, I earned my M.S. degree from [the University of Pittsburgh](https://www.pitt.edu/), where I was advised by [Prof. Peter Brusilovsky](https://www.sci.pitt.edu/people/peter-brusilovsky), and my B.E. degree from [Shanghai Normal University](https://shnu.edu.cn/).



<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News

- *2025.11*: &nbsp;✈️ Attended [*the AMIA Annual Symposium 2025*](https://amia.org/education-events/amia-2025-annual-symposium) in Atlanta, GA.
- *2025.10*: &nbsp;🚶 Attended *ACM BCB 2025* in Philadelphia, PA and delivered a presentation.
- *2025.08*: &nbsp;🎉🎉 Two papers accepted by [*the 16th ACM Conference on Bioinformatics, Computational Biology, and Health Informatics*](https://acm-bcb.org/2025/index.php) (ACM BCB'25).
- *2025.07*: &nbsp;🎉 A paper accepted by [IEEE Transactions on Information Forensics & Security](IEEE TIFS).
- *2025.06*: &nbsp;👨🏻‍💻 Attended IEEE ICHI’25 & AIME’25 (both in Italy 🇮🇹) and presented remotely 🥹.
- *2025.04*: &nbsp;🎉 A paper accepted by [*the 23rd International Conference on Artificial Intelligence in Medicine*](https://aime25.aimedicine.info/) (AIME’25).
- *2025.01*: &nbsp;🎉🎉 Two papers accepted by [*the 13th IEEE International Conference on Health Informatics*](https://events.dimes.unical.it/ichi2025/) (IEEE ICHI’25).
- *2024.12*: &nbsp;⛳ Successfully passed the Ph.D. candidacy examination at Drexel University.
- *2024.07*: &nbsp;✈️ Attended AIME'24 in Salt Lake City, UT 🩼 and delivered a presentation.
- *2024.06*: &nbsp;✈️ Attended IEEE ICHI’24 in Orlando, FL and delivered a presentation.
- *2024.04*: &nbsp;🎉 A paper accepted by [*the 22nd International Conference on Artificial Intelligence in Medicine*](https://aime24.aimedicine.info/) (AIME’24).
- *2024.03*: &nbsp;🎉 A paper accepted by [*the 12th IEEE International Conference on Health Informatics*](https://ieeeichi2024.github.io/) (IEEE ICHI’24).

# 📝 Publications 

<style>
.badge-inline {
    display: inline-block !important;
    position: relative !important;
    
    /* 解决问题 3: 垂直位置偏低 */
    /* top: -3px 表示向上移动3像素，你可以根据肉眼感觉改成 -2px 或 -4px */
    top: -3px !important; 
    vertical-align: middle !important;
    
    /* 解决问题 2: 与 bullet point 间隔过小 */
    margin-left: 3px !important;
    
    /* 解决问题 1: 右侧空隙太大 */
    margin-right: 3px !important;
}
</style>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TIFS</div><img src='images/fakebench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FakeBench: Probing Explainable Fake Image Detection via Large Multimodal Models](https://arxiv.org/pdf/2404.13306?)

Yixuan Li, Xuelin Liu, **Xiaoyang Wang**, Bu Sung Lee, Shiqi Wang, Anderson Rocha, and Weisi Lin

[**Project**](https://github.com/Yixuanli423/FakeBench?tab=readme-ov-file) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
</div>
</div>
  
- <span class="badge badge-inline">ACM-BCB 2025</span> [MoE-Health: A Mixture of Experts Framework for Robust Multimodal Healthcare Prediction](https://github.com), **Xiaoyang Wang**, Christopher C. Yang.

- <span class="badge badge-inline">ACM-BCB 2025</span> [Automated Clinical Problem Detection from SOAP Notes using a Collaborative Multi-Agent LLM Architecture](https://github.com), Yeawon Lee, **Xiaoyang Wang**, Christopher C. Yang.

- <span class="badge badge-inline">IEEE ICHI 2025</span> [Enhancing Multi-Attribute Fairness in Healthcare Predictive Modeling](https://github.com), **Xiaoyang Wang**, Christopher C. Yang.

- <span class="badge badge-inline">AIME 2025</span> [Balancing Fairness and Performance in Healthcare AI: A Gradient Projection Approach](https://github.com), **Xiaoyang Wang**, Christopher C. Yang. <font color="red">(Top 6% Oral)</font>

- <span class="badge badge-inline">AIME 2024</span> [Explainable AI for Fair Sepsis Mortality Predictive Model](https://github.com), Chia-Hsuan Chang*, **Xiaoyang Wang***, Christopher C. Yang.
  
- <span class="badge badge-inline">IEEE ICHI 2024</span> [An ExplainableFair Framework for Prediction of Substance Use Disorder Treatment Completion](https://github.com), Mary M. Lucas, **Xiaoyang Wang**, Chia-Hsuan Chang, Christopher C. Yang.

- <span class="badge badge-inline">IEEE Access</span> [Achieving Equity via Transfer Learning with Fairness Optimization](https://github.com), **Xiaoyang Wang**, Chia-Hsuan Chang, Christopher C. Yang.

# 🎖 Honors and Awards
- *2025.06* &nbsp;The Student Scholar Award, *AIME 2025* - €800
- *2025.06* &nbsp;The Student Scholar Award, *IEEE ICHI 2025* - $1000
- *2017.10* &nbsp;Merit Student Researcher Scholarship, *Chinese Academy of Sciences* - ¥3000
- *2016.10* &nbsp;Second Prize Merit Scholarship, *Shanghai Normal University* - ¥1200

# 📖 Educations
- *2022.09 - 2027.06 (now)* &nbsp;🇺🇸 **Ph.D.** in Information Science, Drexel University, Philadelphia, USA. 
- *2018.08 - 2020.05* &nbsp;🇺🇸 **M.Sc.** in Information Science, University of Pittsburgh, Pittsburgh, USA.
- *2014.09 - 2018.06* &nbsp;🇨🇳 **B.Eng.** in Telecommunication Engineering, Shanghai Normal University, Shanghai, China.

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->


<!-- # 💻 Misc
- *2020.09 - 2022.09* &nbsp;Cloud Software Engineer (*Full-time*), [China CITIC Bank](https://www.group.citic/en/Diversified_Portfolio/Finance/Bank/), Beijing, China.
- *2017.12 - 2018.06* &nbsp;Software Engineer (*Intern*), RI, Shanghai, China.
- *2017.04 - 2017.07* &nbsp;Software Engineer (*Intern*), [SIMIT](http://english.sim.cas.cn/), Shanghai, China. -->

# 🌍 Visitor Map

<div style="margin-top: 20px;">
<a href="https://mapmyvisitors.com/web/1c0rl"  title="Visit tracker"><img src="https://mapmyvisitors.com/map.png?d=VwnZlP0yX7sO015IomJBlgADuuGHtL83o_f0LsUttyQ&cl=ffffff" /></a>
</div>