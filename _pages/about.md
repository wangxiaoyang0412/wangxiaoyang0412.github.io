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

<!-- - *2026.08*: &nbsp;🎉 A paper accepted by [*Empirical Methods in Natural Language Processing (EMNLP 2026)*](https://2026.emnlp.org/). -->
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

<div class="publication-heading" id="publications">
  <h1>Publications</h1>
  <div class="publication-switcher" role="group" aria-label="Publication view">
    <button class="publication-switcher__button is-active" type="button" data-publication-target="publication-highlights" aria-controls="publication-highlights" aria-pressed="true">Highlights</button>
    <button class="publication-switcher__button" type="button" data-publication-target="publication-full-list" aria-controls="publication-full-list" aria-pressed="false">Full list</button>
  </div>
</div>

<p class="publication-legend">&#42; Equal contribution.</p>

<div class="publication-panel" id="publication-highlights">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2026</div><img src='images/fig1_illusion-1.webp' alt="Overview figure of the CARA cross-agent reasoning alignment framework" width="800" height="671" loading="lazy" decoding="async"></div></div>
<div class='paper-box-text' markdown="1">

<p class="publication-title">The Consistency Illusion: How Multi-Agent Debate Hides Reasoning Misalignment</p>

**Xiaoyang Wang**, [Christopher C. Yang](https://cci.drexel.edu/faculty/cyang/).

<div class="publication-actions">
  <a class="publication-action publication-action--paper" href="https://arxiv.org/abs/2606.08457" aria-label="Read The Consistency Illusion paper">
    <i class="fas fa-file-alt" aria-hidden="true"></i><span>Paper</span>
  </a>
  <!-- Replace the href below with the public GitHub repository URL when available. -->
  <a class="publication-action publication-action--github" href="https://anonymous.4open.science/r/consistency-illusion-code-3629/" aria-label="View The Consistency Illusion code repository">
    <i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span>
  </a>
  <a class="publication-citations" href="{{ site.author.googlescholar }}"><strong><span class="show_paper_citations" data-paper-title="The Consistency Illusion: How Multi-Agent Debate Hides Reasoning Misalignment" hidden></span></strong></a>
</div>

- This work introduces **CARA (Cross-Agent Reasoning Alignment)**, a family of metrics that tests whether multi-agent LLMs which agree on an answer also share compatible reasoning, revealing a **consistency illusion** in which debate suppresses agent contradictions while their reasoning chains grow less similar.
- It proposes the **Grounded Debate Protocol (GDP)**, a lightweight prompt-level intervention that substantially improves cross-agent reasoning alignment across two medical QA benchmarks and two model backbones without adding any LLM calls.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TIFS</div><img src='images/fakebench.webp' alt="FakeBench benchmark overview for explainable fake image detection" width="800" height="663" loading="lazy" decoding="async"></div></div>
<div class='paper-box-text' markdown="1">

<p class="publication-title">FakeBench: Probing Explainable Fake Image Detection via Large Multimodal Models</p>

[Yixuan Li](https://yixuanli423.github.io/), [Xuelin Liu](https://lxlhxl123.github.io/LXL.github.io/), **Xiaoyang Wang**, Bu Sung Lee, [Shiqi Wang](https://www.cs.cityu.edu.hk/~shiqwang/), [Anderson Rocha](https://www.ic.unicamp.br/~rocha/), and [Weisi Lin](https://personal.ntu.edu.sg/wslin/Home.html).

<div class="publication-actions">
  <a class="publication-action publication-action--paper" href="https://doi.org/10.1109/TIFS.2025.3597211" aria-label="Read the FakeBench paper">
    <i class="fas fa-file-alt" aria-hidden="true"></i><span>Paper</span>
  </a>
  <a class="publication-action publication-action--github" href="https://github.com/Yixuanli423/FakeBench" aria-label="View FakeBench code on GitHub">
    <i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span>
  </a>
  <a class="publication-citations" href="{{ site.author.googlescholar }}"><strong><span class="show_paper_citations" data-paper-title="FakeBench: Probing Explainable Fake Image Detection via Large Multimodal Models||FakeBench: Uncover the Achilles' Heels of Fake Images with Large Multimodal Models" hidden></span></strong></a>
</div>

- This work introduces **FakeBench**, a multimodal benchmark designed to evaluate large multimodal models (LMMs) on explainable fake image detection rather than simple binary classification.
- The benchmark incorporates a **fine-grained taxonomy of generative visual forgeries** and human-in-the-loop textual descriptions to assess detection, reasoning, interpretation, and detailed forgery analysis.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Pattern Recognition</div><img src='images/DeepSelective.webp' alt="DeepSelective framework diagram for interpretable EHR prognosis prediction" width="800" height="473" loading="lazy" decoding="async"></div></div>
<div class='paper-box-text' markdown="1">

<p class="publication-title">DeepSelective: Interpretable Prognosis Prediction via Feature Selection and Compression in EHR Data</p>

[Ruochi Zhang](https://scholar.google.com/citations?user=T-s84IoAAAAJ&hl=en&oi=ao), Qian Yang, **Xiaoyang Wang**, Tian Wang, Qiong Zhou, Ziqi Deng, Kewei Li, Yueying Wang, Yusi Fan, Jiale Zhang, Lan Huang, Chang Liu, [Fengfeng Zhou](https://scholar.google.com/citations?user=FL2GqPcAAAAJ&hl=en).

<div class="publication-actions">
  <a class="publication-action publication-action--paper" href="https://doi.org/10.1016/j.patcog.2025.112970" aria-label="Read the DeepSelective paper">
    <i class="fas fa-file-alt" aria-hidden="true"></i><span>Paper</span>
  </a>
  <a class="publication-action publication-action--download" href="https://www.healthinformaticslab.org/supp/DeepSelective/DeepSelective-v2.zip" aria-label="Download the DeepSelective source code">
    <i class="fas fa-download" aria-hidden="true"></i><span>Code</span>
  </a>
  <a class="publication-citations" href="{{ site.author.googlescholar }}"><strong><span class="show_paper_citations" data-paper-title="DeepSelective: Interpretable Prognosis Prediction via Feature Selection and Compression in EHR Data" hidden></span></strong></a>
</div>

- This work proposes **DeepSelective**, a novel end to end deep learning framework for predicting patient prognosis using EHR data, with a strong emphasis on enhancing model interpretability.
- DeepSelective combines **data compression** techniques with an innovative **feature selection** approach, integrating custom-designed modules that work together to improve both **accuracy and interpretability**.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Journal of Healthcare Informatics Research</div><img src='images/MediHive.webp' alt="MediHive decentralized multi-agent architecture diagram" width="800" height="402" loading="lazy" decoding="async"></div></div>
<div class='paper-box-text' markdown="1">

<p class="publication-title">MediHive: A Decentralized Agent Collective for Medical Reasoning</p>

**Xiaoyang Wang**, [Christopher C. Yang](https://cci.drexel.edu/faculty/cyang/).

<div class="publication-actions">
  <a class="publication-action publication-action--paper" href="https://link.springer.com/article/10.1007/s41666-026-00239-7" aria-label="Read the MediHive paper">
    <i class="fas fa-file-alt" aria-hidden="true"></i><span>Paper</span>
  </a>
  <a class="publication-citations" href="{{ site.author.googlescholar }}"><strong><span class="show_paper_citations" data-paper-title="MediHive: A Decentralized Agent Collective for Medical Reasoning" hidden></span></strong></a>
</div>

- **MediHive** is a **decentralized** multi-agent framework for medical question answering, in which LLM-based agents self-assign specialized roles, resolve disagreements through conditional evidence-based debate, and iteratively fuse peer insights via a shared memory pool to reach consensus **without** any central coordinator.
</div>
</div>

</div>

<div class="publication-panel publication-full-list" id="publication-full-list" hidden markdown="1">

1. <span class="publication-venue">EMNLP 2026</span> **[The Consistency Illusion: How Multi-Agent Debate Hides Reasoning Misalignment](https://arxiv.org/abs/2606.08457)**<br>
   <span class="publication-authors">**Xiaoyang Wang**, Christopher C. Yang.</span>

2. <span class="publication-venue">IEEE TIFS</span> **[FakeBench: Probing Explainable Fake Image Detection via Large Multimodal Models](https://doi.org/10.1109/TIFS.2025.3597211)**<br>
   <span class="publication-authors">Yixuan Li, Xuelin Liu, **Xiaoyang Wang**, Bu Sung Lee, Shiqi Wang, Anderson Rocha, and Weisi Lin.</span>

3. <span class="publication-venue">Pattern Recognition</span> **[DeepSelective: Interpretable Prognosis Prediction via Feature Selection and Compression in EHR Data](https://doi.org/10.1016/j.patcog.2025.112970)**<br>
   <span class="publication-authors">Ruochi Zhang, Qian Yang, **Xiaoyang Wang**, Tian Wang, Qiong Zhou, Ziqi Deng, Kewei Li, Yueying Wang, Yusi Fan, Jiale Zhang, Lan Huang, Chang Liu, and Fengfeng Zhou.</span>

4. <span class="publication-venue">J Healthc Inform Res</span> **[MediHive: A Decentralized Agent Collective for Medical Reasoning](https://link.springer.com/article/10.1007/s41666-026-00239-7)**<br>
   <span class="publication-authors">**Xiaoyang Wang**, Christopher C. Yang.</span>

5. <span class="publication-venue">AMIA 2026</span> **Strategy-Guided Multi-Agent Debate for Medical Question Answering**<br>
   <span class="publication-authors">**Xiaoyang Wang**, Christopher C. Yang.</span>

6. <span class="publication-venue">ACM BCB 2025</span> **[MoE-Health: A Mixture of Experts Framework for Robust Multimodal Healthcare Prediction](https://arxiv.org/abs/2508.21793)**<br>
   <span class="publication-authors">**Xiaoyang Wang**, Christopher C. Yang.</span>

7. <span class="publication-venue">ACM BCB 2025</span> **[Automated Clinical Problem Detection from SOAP Notes using a Collaborative Multi-Agent LLM Architecture](https://arxiv.org/abs/2508.21803)**<br>
   <span class="publication-authors">Yeawon Lee, **Xiaoyang Wang**, Christopher C. Yang.</span>

8. <span class="publication-venue">IEEE ICHI 2025</span> **[Enhancing Multi-Attribute Fairness in Healthcare Predictive Modeling](https://arxiv.org/abs/2501.13219)**<br>
   <span class="publication-authors">**Xiaoyang Wang**, Christopher C. Yang.</span>

9. <span class="publication-venue">AIME 2025</span> **[Balancing Fairness and Performance in Healthcare AI: A Gradient Reconciliation Approach](https://link.springer.com/chapter/10.1007/978-3-031-95838-0_47)** <span class="publication-note">Top 6% Oral</span><br>
   <span class="publication-authors">**Xiaoyang Wang**, Christopher C. Yang.</span>

10. <span class="publication-venue">AIME 2024</span> **[Explainable AI for Fair Sepsis Mortality Predictive Model](https://arxiv.org/abs/2404.13139)**<br>
    <span class="publication-authors">Chia-Hsuan Chang\*, **Xiaoyang Wang\***, Christopher C. Yang.</span>

11. <span class="publication-venue">IEEE ICHI 2024</span> **[An ExplainableFair Framework for Prediction of Substance Use Disorder Treatment Completion](https://arxiv.org/abs/2404.03833)**<br>
    <span class="publication-authors">Mary M. Lucas, **Xiaoyang Wang**, Chia-Hsuan Chang, Christopher C. Yang.</span>

12. <span class="publication-venue">IEEE Access</span> **[Achieving Equity via Transfer Learning with Fairness Optimization](https://doi.org/10.1109/ACCESS.2024.3519465)**<br>
    <span class="publication-authors">**Xiaoyang Wang**, Chia-Hsuan Chang, Christopher C. Yang.</span>

</div>

<script src="{{ '/assets/js/home-interactions.js' | relative_url }}" defer></script>

# Background {#background}

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
            <span class="background-item__logo background-item__logo--shnu" aria-hidden="true"><img src="{{ '/images/institutions/shnu.jpg' | relative_url }}" alt=""></span>
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

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# Academic Service {#service}
- **Journal Reviewership:** <abbr class="service-abbr" title="Journal of the American Medical Informatics Association">JAMIA</abbr>, <abbr class="service-abbr" title="Journal of Healthcare Informatics Research">J Healthc Inform Res</abbr>, <abbr class="service-abbr" title="IEEE Transactions on Information Forensics and Security">IEEE TIFS</abbr>, <abbr class="service-abbr" title="Information Processing &amp; Management">IP&amp;M</abbr>, <abbr class="service-abbr" title="ACM Transactions on Computing for Healthcare">ACM HEALTH</abbr>, <abbr class="service-abbr" title="Medical Image Analysis">MedIA</abbr>, and <abbr class="service-abbr" title="Computers &amp; Electrical Engineering">Comput Electr Eng</abbr>.
- Conference Reviewer: *NeurIPS’24, AAAI’25, ICLR’25, ICWSM’25, IEEE ICHI’25, IEEE ICHI’26, WWW'26, Digital Twins for Health Society (DT4HS), IEEE ICME’26*

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
