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
<p><span class="anchor" id="about-me"></span></p>
<p>
Hello, I am <a class="red-label">Yiming Zhong</a>, a master student in the Visual & Data Intelligence (<a href="https://vdi.sist.shanghaitech.edu.cn/">VDI</a>) Center, 4DVLab at <a href="https://www.shanghaitech.edu.cn/zs/list.htm">ShanghaiTech University</a>, advised by <a href="http://yuexinma.me/">Yuexin Ma</a>. 

Currently, I am an AI algorithm engineer intern at Huawei (Yinwang), supervised by <a href="https://xingezhu.me/aboutme.html">Xinge zhu</a>. Before that, I received my bachelor's degree from Shandong University.

I'm interested in computer vision, machine learning, and their applications in robotics, particularly in embodied AI and vision-language-action models. If you have any questions, feel free to drop me an email!
</p>
<p>
  
</p>
<p>
  
</p>
<p>
  
</p>


<h1 id="-publications">📝 Publications</h1>
<p style="color: #3f446a; margin: 0%; font-weight: 350;">* Indicates Equal Contribution † Indicates Corresponding Author</p>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-highlight"><b>AAAI Oral</b></div>
      <img src="images/affordance-r1.png" alt="sym" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;" href="https://github.com/hq-King/Affordance-R1">Affordance-R1: Reinforcement Learning for Generalizable Affordance Reasoning
in Multimodal Large Language Model</a>
    </p>
    <p>
      Hanqing Wang*, Shaoyang Wang*, <b>Yiming Zhong</b>, Zemin Yang, Jiamin Wang, Zhiqing Cui,Jiahao Yuan, Yifan Han, Mingyu Liu, Yuexin Ma†
    </p>
    <p>We introduce Affordance-R1, which is capable of generating explicit reasoning alongside the final answer. With the help of proposed affordance reasoning reward, it achieves robust zero-shot generalization and exhibits emergent test-time reasoning capabilities.</p>
    <a href="https://arxiv.org/pdf/2508.06206" class="pdf-link" target="_blank">PDF</a>
    <a href="https://github.com/hq-King/Affordance-R1" class="paper-box-link" target="_blank">
    Page <i class="fas fa-external-link-alt"></i></a>
    <a href="https://github.com/hq-King/Affordance-R1" class="paper-box-link" target="_blank">Github <i class="fab fa-github"></i> </a>
    <!-- <a href="https://github.com/hq-King/Affordance-R1" target="_blank">
      <img src="https://img.shields.io/github/stars/hq-King/Affordance-R1?style=social&label=Star" alt="GitHub stars" />
    </a> -->
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-IMWUT"><b>NIPS 2025</b></div>
      <img src="images/Freqpolicy.png" alt="sym" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;" href="https://freq-policy.github.io/">FreqPolicy: Frequency Autoregressive Visuomotor Policy with Continuous Tokens</a>
    </p>
    <p>
      <b>Yiming Zhong</b>, Yumeng Liu, Chuyang Xiao, Zemin Yang, Youzhuo Wang, Yufei Zhu, Ye Shi, Yujing Sun, Xinge Zhu, Yuexin Ma†
    </p>
    <p>This paper proposes FreqPolicy, a frequency-domain autoregressive visuomotor policy that progressively models hierarchical frequency components with continuous latent representations, achieving superior accuracy and efficiency in robotic manipulation tasks.</p>
    <a href="https://arxiv.org/pdf/2506.01583" class="pdf-link" target="_blank">PDF</a>
    <a href="https://freq-policy.github.io/" class="paper-box-link" target="_blank">
    Page <i class="fas fa-external-link-alt"></i></a>
    <a href="https://github.com/4DVLab/Freqpolicy" class="paper-box-link" target="_blank">Github <i class="fab fa-github"></i> </a>
    <!-- <a href="https://github.com/4DVLab/Freqpolicy" target="_blank">
      <img src="https://img.shields.io/github/stars/4DVLab/Freqpolicy?style=social&label=Star" alt="GitHub stars" />
    </a> -->
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-IMWUT"><b>ICCV 2025</b></div>
      <img src="images/DexH2R.png" alt="sym" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;" href="https://dexh2r.github.io/">DexH2R: A Benchmark for Dynamic Dexterous Grasping in Human-to-Robot Handover</a>
    </p>
    <p>
      Youzhuo Wang*, Jiayi Ye*, Chuyang Xiao, <b>Yiming Zhong</b>, Heng Tao, Hang Yu, Yumeng Liu, Jingyi Yu, Yuexin Ma†
    </p>
    <p>This paper introduces DexH2R, a real-world dataset for human-to-robot handovers featuring dexterous motions, diverse objects, and rich annotations. Using teleoperation, it captures natural human-like behaviors for robotic learning. </p>
    <a href="https://arxiv.org/pdf/2506.23152" class="pdf-link" target="_blank">PDF</a>
    <a href="https://dexh2r.github.io/" class="paper-box-link" target="_blank">
    Page <i class="fas fa-external-link-alt"></i></a>
    <a href="https://github.com/4DVLab/DexH2R" class="paper-box-link" target="_blank">Github <i class="fab fa-github"></i> </a>
    <!-- <a href="https://github.com/4DVLab/DexH2R" target="_blank">
      <img src="https://img.shields.io/github/stars/4DVLab/DexH2R?style=social&label=Star" alt="GitHub stars" />
    </a> -->
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-IMWUT"><b>ICCV 2025</b></div>
      <img src="images/EvolvingGrasp.png" alt="sym" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;" href="https://evolvinggrasp.github.io/">EvolvingGrasp: Evolutionary Grasp Generation via Efficient Preference Alignment</a>
    </p>
    <p>
      Yufei Zhu*, <b>Yiming Zhong*</b>, Zemin Yang, Peishan Cong, Jingyi Yu, Xinge Zhu, Yuexin Ma†
    </p>
    <p>This paper introduces EvolvingGrasp, which integrates Handpose-wise Preference Optimization with a Physics-aware Consistency Model to enable efficient evolutionary grasp generation, achieving improved grasp success rates and computational efficiency. </p>
    <a href="https://arxiv.org/pdf/2503.14329" class="pdf-link" target="_blank">PDF</a>
    <a href="https://evolvinggrasp.github.io/" class="paper-box-link" target="_blank">
    Page <i class="fas fa-external-link-alt"></i></a>
    <a href="https://github.com/4DVLab/EvolvingGrasp/" class="paper-box-link" target="_blank">Github <i class="fab fa-github"></i> </a>
    <!-- <a href="https://github.com/4DVLab/EvolvingGrasp/" target="_blank">
      <img src="https://img.shields.io/github/stars/4DVLab/EvolvingGrasp?style=social&label=Star" alt="GitHub stars" />
    </a> -->
  </div>
</div>




<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-highlight"><b>CVPR 2025 (Highlight)</b></div>
      <img src="images/dexgraspanyting.png" alt="sym" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;" href="https://dexgraspanything.github.io/">DexGraspAnything: Towards Universal Robotic Dexterous Grasping with Physics Awareness</a>
    </p>
    <p>
      <b>Yiming Zhong*</b>, Qi Jiang*, Jingyi Yu, Yuexin Ma†
    </p>
    <p>This paper proposes DexGrasp Anything, a diffusion-based method for generating physically plausible grasps with dexterous hands. By integrating physical constraints into both training and sampling, we address high-DOF challenges while synthesizing robust poses for diverse objects. Our 3.4M-grasp dataset (15k+ objects) enables scalable learning, achieving state-of-the-art performance in universal robotic grasping across benchmarks. </p>
    <a href="https://arxiv.org/pdf/2503.08257" class="pdf-link" target="_blank">PDF</a>
    <a href="https://dexgraspanything.github.io/" class="paper-box-link" target="_blank">
    Page <i class="fas fa-external-link-alt"></i></a>
    <a href="https://github.com/4DVLab/DexGrasp-Anything" class="paper-box-link" target="_blank">Github <i class="fab fa-github"></i> </a>
    <!-- <a href="https://github.com/4DVLab/DexGrasp-Anything" target="_blank">
      <img src="https://img.shields.io/github/stars/4DVLab/DexGrasp-Anything?style=social&label=Star" alt="GitHub stars" />
    </a> -->
  </div>
</div>



<h1 id="-honors-and-awards">🎖 Honors and Awards</h1>
<ul>

  <li>
    <a class="red-label">05/2023</a> Mathematical Contest In Modeling(MCM) <b>Finalist Prize(Top 1%)</b>
  </li>

  <li>
    <a class="red-label">09/2022</a> China Undergraduate Mathematical Contest in Modeling(CUMCM) <b>National First Prize(Top 0.5%)</b>
  </li>

</ul>

# 📖 Educations
<div class='paper-box'><div class='paper-box-image'><div><img src='images/skd.png' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

<span style="font-size:18px;">**ShanghaiTech University**</span>

September 2024 - Now

  Major: Master. in Computer Science

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/sdu.png' alt="sym" width="95%"></div></div>
<div class='paper-box-text' markdown="1">

<span style="font-size:18px;">**Shandong University**</span>

September 2020 - July 2024

Major: B.E. in Statistics; Second Major: Computer Science

</div>
</div>

# 💻 Experience 
- *2025.08 - Present*, Algorithm Engineer at <a href="https://www.huawei.com/en/giv/intelligent-automotive-solution-2030">ADS AI Department, IAS BU of Huawei (Yinwang)</a>, focusing on Vision-Language-Action (VLA) models for embodied AI.

<h1 id="-hobbies">🎨 Hobbies</h1>
<p style="color: black; margin: 0%; font-weight: 350;">
  
  🚴🏻‍♂️ Cycling, 🎮 FPS Games, 🏀 Basketball
  
</p>


