---
permalink: /
title: ""
excerpt: ""
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

{% include home-profile.html %}

# Research {#research}

<div class="research-overview">
  <p class="research-overview__statement">Clinical AI can be accurate on average yet still fail the patients who need it most — by being unfair, opaque, or confidently wrong. My research targets these failure modes across three connected directions: <em>fair and interpretable prediction</em>, <em>multimodal patient modeling</em>, and <em>reliable medical agents</em>. Currently, my dissertation asks when multi-agent LLM systems in medicine deserve our trust: when they agree, do they actually reason alike?</p>

  <div class="research-direction">
    <h2>Fairness &amp; Explainability</h2>
    <p>I develop learning and optimization methods that make clinical prediction more equitable across demographic groups while preserving predictive performance. This work includes <a href="https://arxiv.org/abs/2501.13219">multi-attribute fairness</a> <span class="research-venue">IEEE ICHI 2025</span>, <a href="https://link.springer.com/chapter/10.1007/978-3-031-95838-0_47">reconciling fairness and accuracy gradients</a> <span class="research-venue">AIME 2025</span>, <a href="https://doi.org/10.1109/ACCESS.2024.3519465">fairness-aware transfer learning</a> <span class="research-venue">IEEE Access</span>, and explainable prediction for <a href="https://arxiv.org/abs/2404.13139">sepsis mortality</a> and <a href="https://arxiv.org/abs/2404.03833">treatment completion</a>.</p>
  </div>

  <div class="research-direction">
    <h2>Multimodal Learning</h2>
    <p>Patients rarely present as a single data type. My multimodal work builds robust representations from whatever combination of modalities is available: <a href="https://arxiv.org/abs/2508.21793">MoE-Health</a> <span class="research-venue">ACM BCB 2025</span> routes heterogeneous health data through a mixture-of-experts design, and <a href="https://doi.org/10.1016/j.patcog.2025.112970">DeepSelective</a> <span class="research-venue">Pattern Recognition</span> pairs feature selection with compression so EHR prognosis models stay interpretable.</p>
  </div>

  <div class="research-direction">
    <h2>Medical Agents</h2>
    <p>When a panel of LLM agents agrees on an answer, should we believe it? My work builds medical agent systems and probes exactly that question: <a href="https://link.springer.com/article/10.1007/s41666-026-00239-7">MediHive</a> <span class="research-venue">J Healthc Inform Res</span> coordinates specialized agents without a central controller, <a href="https://arxiv.org/abs/2606.08457">The Consistency Illusion</a> shows that debate can align answers while reasoning quietly drifts apart, and a <a href="https://arxiv.org/abs/2508.21803">collaborative multi-agent architecture</a> <span class="research-venue">ACM BCB 2025</span> detects clinical problems from SOAP notes.</p>
  </div>
</div>

# News {#news}

<div class="news-list" markdown="1">

- *2026.08*: &nbsp;🎉 A *Main Conference* paper accepted by [*Empirical Methods in Natural Language Processing (EMNLP 2026)*](https://2026.emnlp.org/).
- *2026.08*: &nbsp;⛳ Successfully defended the Ph.D. Dissertation Proposal at Drexel University.
- *2026.06*: &nbsp;✈️ Attended *IEEE ICHI 2026* in Minneapolis, MN and delivered a presentation.
- *2026.05*: &nbsp;🎉 A paper accepted by [*AMIA 2026 Annual Symposium*](https://amia.org/education-events/amia-2026-annual-symposium).
- *2026.05*: &nbsp;🎉 A paper accepted by [*Journal of Healthcare Informatics Research*](https://link.springer.com/journal/41666).
- *2026.01*: &nbsp;🎉 A paper accepted by [*the 14th IEEE International Conference on Health Informatics*](https://zhang-informatics.github.io/ICHI2026) (IEEE ICHI’26).
- *2025.12*: &nbsp;🎉 A paper accepted by [*Pattern Recognition*](https://www.journals.elsevier.com/pattern-recognition).
- *2025.11*: &nbsp;✈️ Attended [*the AMIA Annual Symposium 2025*](https://amia.org/education-events/amia-2025-annual-symposium) in Atlanta, GA.
- *2025.10*: &nbsp;🚶 Attended *ACM BCB 2025* in Philadelphia, PA and delivered a presentation.
- *2025.08*: &nbsp;🎉🎉 Two papers accepted by [*the 16th ACM Conference on Bioinformatics, Computational Biology, and Health Informatics*](https://acm-bcb.org/2025/index.php) (ACM BCB'25).
- *2025.07*: &nbsp;🎉 A paper accepted by [*IEEE Transactions on Information Forensics & Security*](https://signalprocessingsociety.org/publications-resources/ieee-transactions-information-forensics-and-security).
- *2025.06*: &nbsp;👨🏻‍💻 Attended IEEE ICHI’25 & AIME’25 (both in Italy 🇮🇹) and presented remotely 🥹.
- *2025.04*: &nbsp;🎉 A paper accepted by [*the 23rd International Conference on Artificial Intelligence in Medicine*](https://aime25.aimedicine.info/) (AIME’25).
- *2025.01*: &nbsp;🎉🎉 Two papers accepted by [*the 13th IEEE International Conference on Health Informatics*](https://events.dimes.unical.it/ichi2025/) (IEEE ICHI’25).

</div>

<details class="news-archive">
<summary>Earlier news</summary>
<div class="news-archive__content" markdown="1">

- *2024.12*: &nbsp;⛳ Successfully passed the Ph.D. candidacy examination at Drexel University.
- *2024.07*: &nbsp;✈️ Attended AIME'24 in Salt Lake City, UT 🩼 and delivered a presentation.
- *2024.06*: &nbsp;✈️ Attended IEEE ICHI’24 in Orlando, FL and delivered a presentation.
- *2024.04*: &nbsp;🎉 A paper accepted by [*the 22nd International Conference on Artificial Intelligence in Medicine*](https://aime24.aimedicine.info/) (AIME’24).
- *2024.03*: &nbsp;🎉 A paper accepted by [*the 12th IEEE International Conference on Health Informatics*](https://ieeeichi2024.github.io/) (IEEE ICHI’24).

</div>
</details>

{% include publications.html %}

<script src="{{ '/assets/js/home-interactions.js' | relative_url }}" defer></script>

# Background {#background}

{% if site.data.settings.background_view == "compact" %}

<div class="compact-background" aria-label="Education and honors">
  <section class="compact-background__col" aria-labelledby="compact-education">
    <h2 class="compact-background__title" id="compact-education">Education</h2>
    <ul class="edu-timeline">
      <li class="edu-timeline__item">
        <span class="edu-timeline__logo" aria-hidden="true"><img src="{{ '/images/institutions/drexel.png' | relative_url }}" alt=""></span>
        <div class="edu-timeline__body">
          <strong><a href="https://drexel.edu/">Drexel University</a></strong>
          <span class="edu-timeline__degree">Ph.D. in Information Science</span>
          <span class="edu-timeline__years">2022 &ndash; Present</span>
        </div>
      </li>
      <li class="edu-timeline__item">
        <span class="edu-timeline__logo" aria-hidden="true"><img src="{{ '/images/institutions/pitt.png' | relative_url }}" alt=""></span>
        <div class="edu-timeline__body">
          <strong><a href="https://www.pitt.edu/">University of Pittsburgh</a></strong>
          <span class="edu-timeline__degree">M.Sc. in Information Science</span>
          <span class="edu-timeline__years">2018 &ndash; 2020</span>
        </div>
      </li>
      <li class="edu-timeline__item">
        <span class="edu-timeline__logo" aria-hidden="true"><img src="{{ '/images/institutions/shnu.png' | relative_url }}" alt=""></span>
        <div class="edu-timeline__body">
          <strong><a href="https://www.shnu.edu.cn/">Shanghai Normal University</a></strong>
          <span class="edu-timeline__degree">B.Eng. in Telecommunication Engineering</span>
          <span class="edu-timeline__years">2014 &ndash; 2018</span>
        </div>
      </li>
    </ul>
  </section>

  <section class="compact-background__col" aria-labelledby="compact-awards">
    <h2 class="compact-background__title" id="compact-awards">Honors &amp; Awards</h2>
    <ul class="edu-timeline awards-timeline">
      <li class="edu-timeline__item">
        <div class="edu-timeline__body">
          <strong>The Institute for Healthcare Informatics (IHI) Student Award</strong>
          <span class="edu-timeline__years">2026</span>
        </div>
      </li>
      <li class="edu-timeline__item">
        <div class="edu-timeline__body">
          <strong>AIME 2025 Student Scholar Award</strong>
          <span class="edu-timeline__years">2025</span>
        </div>
      </li>
      <li class="edu-timeline__item">
        <div class="edu-timeline__body">
          <strong>IEEE ICHI 2025 Student Scholar Award</strong>
          <span class="edu-timeline__years">2025</span>
        </div>
      </li>
      <li class="edu-timeline__item">
        <div class="edu-timeline__body">
          <strong>Merit Student Researcher Scholarship, Chinese Academy of Sciences</strong>
          <span class="edu-timeline__years">2017</span>
        </div>
      </li>
      <li class="edu-timeline__item">
        <div class="edu-timeline__body">
          <strong>Second Prize Merit Scholarship, Shanghai Normal University</strong>
          <span class="edu-timeline__years">2016</span>
        </div>
      </li>
    </ul>
  </section>
</div>

{% else %}

<section class="background-module" aria-label="Education, work experience, and honors">
  <div class="background-module__grid">
    <section class="background-section" aria-labelledby="education">
      <h2 id="education"><span class="background-section__icon" aria-hidden="true"><i class="fas fa-graduation-cap"></i></span>Education</h2>
      <ul class="background-list">
        <li>
          <div class="background-item__identity">
            <span class="background-item__logo background-item__logo--drexel" aria-hidden="true"><img src="{{ '/images/institutions/drexel.png' | relative_url }}" alt=""></span>
            <div class="background-item__main">
              <strong><a href="https://drexel.edu/">Drexel University</a></strong>
              <span>Ph.D. in Information Science · Philadelphia, USA</span>
            </div>
          </div>
          <span class="background-item__date">Sep. 2022 &ndash; Jun. 2027</span>
        </li>
        <li>
          <div class="background-item__identity">
            <span class="background-item__logo" aria-hidden="true"><img src="{{ '/images/institutions/pitt.png' | relative_url }}" alt=""></span>
            <div class="background-item__main">
              <strong><a href="https://www.pitt.edu/">University of Pittsburgh</a></strong>
              <span>M.Sc. in Information Science · Pittsburgh, USA</span>
            </div>
          </div>
          <span class="background-item__date">Aug. 2018 &ndash; May 2020</span>
        </li>
        <li>
          <div class="background-item__identity">
            <span class="background-item__logo background-item__logo--shnu" aria-hidden="true"><img src="{{ '/images/institutions/shnu.png' | relative_url }}" alt=""></span>
            <div class="background-item__main">
              <strong><a href="https://www.shnu.edu.cn/">Shanghai Normal University</a></strong>
              <span>B.Eng. in Telecommunication Engineering · Shanghai, China</span>
            </div>
          </div>
          <span class="background-item__date">Sep. 2014 &ndash; Jun. 2018</span>
        </li>
      </ul>
    </section>

    <section class="background-section" aria-labelledby="experience">
      <h2 id="experience"><span class="background-section__icon" aria-hidden="true"><i class="fas fa-briefcase"></i></span>Work Experience</h2>
      <ul class="background-list">
        <li>
          <div class="background-item__identity">
            <span class="background-item__logo background-item__logo--citic" aria-hidden="true"><img src="{{ '/images/institutions/citic-bank.png' | relative_url }}" alt=""></span>
            <div class="background-item__main">
              <strong>Risk Management Engineer</strong>
              <span><a href="https://www.citicbank.com/about/introduction/brief/">China CITIC Bank</a> · Beijing, China</span>
            </div>
          </div>
          <span class="background-item__date">Sep. 2020 &ndash; Sep. 2022</span>
        </li>
        <li>
          <div class="background-item__identity">
            <span class="background-item__logo" aria-hidden="true"><img src="{{ '/images/institutions/sjtu.png' | relative_url }}" alt=""></span>
            <div class="background-item__main">
              <strong>Software Engineer Intern</strong>
              <span><a href="https://icisee.sjtu.edu.cn/kytd/673.html">Radar Institute</a> · Shanghai, China</span>
            </div>
          </div>
          <span class="background-item__date">Dec. 2017 &ndash; Jun. 2018</span>
        </li>
        <li>
          <div class="background-item__identity">
            <span class="background-item__logo background-item__logo--simit" aria-hidden="true"><img src="{{ '/images/institutions/simit.png' | relative_url }}" alt=""></span>
            <div class="background-item__main">
              <strong>Software Engineer Intern</strong>
              <span><a href="https://english.sim.cas.cn/">SIMIT</a> · Shanghai, China</span>
            </div>
          </div>
          <span class="background-item__date">Apr. 2017 &ndash; Jul. 2017</span>
        </li>
      </ul>
    </section>

    <section class="background-section background-section--honors" aria-labelledby="honors">
      <h2 id="honors"><span class="background-section__icon" aria-hidden="true"><i class="fas fa-award"></i></span>Honors &amp; Awards</h2>
      <ul class="background-list">
        <li>
          <div class="background-item__main"><strong>The Institute for Healthcare Informatics (IHI) Student Award</strong></div>
          <time class="background-item__date" datetime="2026-06">Jun. 2026</time>
        </li>
        <li>
          <div class="background-item__main"><strong>AIME 2025 Student Scholar Award</strong></div>
          <time class="background-item__date" datetime="2025-06">Jun. 2025</time>
        </li>
        <li>
          <div class="background-item__main"><strong>IEEE ICHI 2025 Student Scholar Award</strong></div>
          <time class="background-item__date" datetime="2025-06">Jun. 2025</time>
        </li>
        <li>
          <div class="background-item__main"><strong>Merit Student Researcher Scholarship, Chinese Academy of Sciences</strong></div>
          <time class="background-item__date" datetime="2017-10">Oct. 2017</time>
        </li>
        <li>
          <div class="background-item__main"><strong>Second Prize Merit Scholarship, Shanghai Normal University</strong></div>
          <time class="background-item__date" datetime="2016-10">Oct. 2016</time>
        </li>
      </ul>
    </section>
  </div>
</section>

{% endif %}

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# Academic Service {#service}
- **Journal Reviewer:** <abbr class="service-abbr" title="Journal of the American Medical Informatics Association">JAMIA</abbr>, <abbr class="service-abbr" title="Journal of Healthcare Informatics Research">J Healthc Inform Res</abbr>, <abbr class="service-abbr" title="IEEE Transactions on Information Forensics and Security">IEEE TIFS</abbr>, <abbr class="service-abbr" title="Information Processing &amp; Management">IP&amp;M</abbr>, <abbr class="service-abbr" title="ACM Transactions on Computing for Healthcare">ACM HEALTH</abbr>, <abbr class="service-abbr" title="Medical Image Analysis">MedIA</abbr>, and <abbr class="service-abbr" title="Computers &amp; Electrical Engineering">Comput Electr Eng</abbr>.
- **Conference Reviewer:** NeurIPS 2024, AAAI 2025, ICLR 2025, ICWSM 2025, IEEE ICHI 2025 &amp; 2026, WWW 2026, IEEE ICME 2026, and Digital Twins for Health Society (DT4HS).

# Teaching Experience {#teaching}

<section class="teaching-module" aria-label="Teaching experience">
  <div class="teaching-module__group">
    <h2 class="teaching-module__role"><span class="teaching-module__icon" aria-hidden="true"><i class="fas fa-chalkboard-teacher"></i></span>Teaching Assistant · <a href="https://drexel.edu/">Drexel University</a></h2>
    <ul class="teaching-list">
      <li>
        <div class="teaching-item__main"><span class="teaching-item__code">INFO 103</span><strong>Introduction to Data Science</strong></div>
        <span class="teaching-item__term">Winter &amp; Spring 2026</span>
      </li>
      <li>
        <div class="teaching-item__main"><span class="teaching-item__code">INFO 152</span><strong>Web Systems &amp; Services II</strong></div>
        <span class="teaching-item__term">Spring 2026</span>
      </li>
      <li>
        <div class="teaching-item__main"><span class="teaching-item__code">INFO 250</span><strong>Information Visualization</strong></div>
        <span class="teaching-item__term">Spring 2026</span>
      </li>
      <li>
        <div class="teaching-item__main"><span class="teaching-item__code">INFO 623</span><strong>Social Network Analysis</strong></div>
        <span class="teaching-item__term">Spring 2026</span>
      </li>
      <li>
        <div class="teaching-item__main"><span class="teaching-item__code">INFO 212</span><strong>Data Science Programming I</strong></div>
        <span class="teaching-item__term">Fall 2024</span>
      </li>
    </ul>
  </div>

  <div class="teaching-module__group">
    <h2 class="teaching-module__role"><span class="teaching-module__icon" aria-hidden="true"><i class="fas fa-chalkboard-teacher"></i></span>Teaching Assistant · <a href="https://www.shnu.edu.cn/">Shanghai Normal University</a></h2>
    <ul class="teaching-list">
      <li>
        <div class="teaching-item__main"><strong>Digital Switching</strong></div>
        <span class="teaching-item__term">Spring 2017</span>
      </li>
    </ul>
  </div>
</section>

<!-- # 💻 Misc
- *2020.09 - 2022.09* &nbsp;Cloud Software Engineer (*Full-time*), [China CITIC Bank](https://www.group.citic/en/Diversified_Portfolio/Finance/Bank/), Beijing, China.
- *2017.12 - 2018.06* &nbsp;Software Engineer (*Intern*), RI, Shanghai, China.
- *2017.04 - 2017.07* &nbsp;Software Engineer (*Intern*), [SIMIT](http://english.sim.cas.cn/), Shanghai, China. -->

{% include visitor-map.html %}
