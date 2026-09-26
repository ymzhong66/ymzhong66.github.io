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
Hello, I am <a class="red-label">Yiming Zhong</a>, a master student in the Visual & Data Intelligence (<a href="https://vdi.sist.shanghaitech.edu.cn/">VDI</a>) Center, <a href="https://4dvlab.github.io/">4DVLab</a> at <a href="https://www.shanghaitech.edu.cn/zs/list.htm">ShanghaiTech University</a>, supervised by <a href="http://yuexinma.me/">Yuexin Ma</a> and <a href="https://xingezhu.me/aboutme.html">Xinge Zhu</a> from <a href="https://mmlab.ie.cuhk.edu.hk/">MMLAB</a> at The Chinese University of Hong Kong. Before that, I received my bachelor's degree from Shandong University.

I'm interested in computer vision, machine learning, and their applications in robotics, particularly in embodied AI and vision-language-action models. If you have any questions, feel free to drop me an email!
</p>
<p>
  
</p>
<p>
  
</p>
<p>
  
</p>


<h1 id="-publications">📝 Publications</h1>
<p style="color: #3f446a; margin: 0%; font-weight: 350;">* Indicates Equal Contribution † Indicates Corresponding Author ‡ Indicates Project Lead</p>

<h2 id="action-modeling">Action Modeling &amp; Large Models</h2>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-IMWUT"><b>Under Review</b></div>
      <img src="images/LatentSightDrive-combined.webp" alt="LatentSightDrive framework" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <span style="text-decoration: underline;">LatentSightDrive: Progressive Foresight Internalization for Autonomous Driving</span>
    </p>
    <p>
      Xue Zhao, <b>Yiming Zhong</b>, Zemin Yang, Xiang Feng, Jin Pan, Xinbing Wang, Xinge Zhu, Yuexin Ma†, Nanyang Ye†
    </p>
    <p>We introduce LatentSightDrive, a framework that internalizes future evidence from an external world model for autonomous driving. Scene-adaptive guidance and planning-relevant foresight scoring selectively align internal and external latent representations to support trajectory planning.</p>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-IMWUT"><b>NeurIPS 2026</b></div>
      <img src="images/ImplicitDriftingPolicy-combined.webp" alt="Implicit Drifting Policy overview" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;" href="https://implicit-drifting-policy.github.io/">Implicit Drifting Policy: One-Step Action Generation via Conditional Expert Geometry</a>
    </p>
    <p>
      Zemin Yang, Yaoyu He, <b>Yiming Zhong</b>, Yuhao Zhang, Xinge Zhu, Yao Mu, Qingqiu Huang, Yuexin Ma†
    </p>
    <p>We introduce Implicit Drifting Policy, a one-step imitation learning framework that uses conditional expert geometry to guide policy training without explicit vector field estimation. It combines efficient action generation with geometric constraints, achieving competitive performance across 2D, 3D, and real-world manipulation tasks.</p>
    <a href="https://arxiv.org/pdf/2606.01098" class="pdf-link" target="_blank">PDF</a>
    <a href="https://implicit-drifting-policy.github.io/" class="paper-box-link" target="_blank">Project page</a>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-IMWUT"><b>ICML 2026</b></div>
      <img src="images/ResVLA.png" alt="sym" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;">ResVLA: From Noise to Intent: Anchoring Generative VLA Policies with Residual Bridges</a>
    </p>
    <p>
      <b>Yiming Zhong*</b>, Yaoyu He*, Zemin Yang*, Pengfei Tian, Yifan Huang, Qingqiu Huang, Xinge Zhu, Yuexin Ma†
    </p>
    <p>We introduce ResVLA, a generative vision-language-action framework that shifts robot control from generation-from-noise to refinement-from-intent by anchoring low-frequency semantic intent and refining high-frequency residual dynamics, achieving strong robustness, faster convergence, and competitive performance. </p>
    <a href="https://arxiv.org/pdf/2604.21391" class="pdf-link" target="_blank">PDF</a>
    <a href="https://res-vla.github.io/ResVLA/" class="paper-box-link" target="_blank">Project page</a>
    <a href="https://github.com/4DVLab/ResVLA" class="paper-box-link" target="_blank">Github <i class="fab fa-github"></i> </a>
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
      <div class="badge-highlight"><b>AAAI 2026 (Oral)</b></div>
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

<h2 id="dexterous-manipulation">Dexterous Manipulation</h2>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-IMWUT"><b>Under Review</b></div>
      <img src="images/FastGrasp.jpg" alt="FastGrasp overview" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;" href="https://taoheng-star.github.io/fastgrasp-page/">FastGrasp: Learning-based Whole-body Control method for Fast Dexterous Grasping with Mobile Manipulators</a>
    </p>
    <p>
      Heng Tao*, <b>Yiming Zhong*</b>, Zemin Yang*, Yuexin Ma†
    </p>
    <p>We introduce FastGrasp, a learning-based framework that combines grasp guidance, whole-body control, and tactile feedback for fast dexterous mobile manipulation. A two-stage reinforcement learning pipeline coordinates the mobile base, arm, and hand, enabling robust grasping in simulation and the real world.</p>
    <a href="https://arxiv.org/pdf/2604.12879" class="pdf-link" target="_blank">PDF</a>
    <a href="https://taoheng-star.github.io/fastgrasp-page/" class="paper-box-link" target="_blank">Project page</a>
    <a href="https://github.com/taoheng-star/FastGrasp" class="paper-box-link" target="_blank">Github <i class="fab fa-github"></i></a>
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
      <img src="images/DexGraspAnything-combined.webp" alt="sym" width="100%" />
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

<h2 id="spatial-intelligence">Spatial Intelligence</h2>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-IMWUT"><b>Under Review</b></div>
      <img src="images/UniAfford-combined.webp" alt="UniAfford overview" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;" href="https://4dvlab.github.io/UniAfford/">UniAfford: Token-Routed Multitask Learning for Generalizable 2D-3D Affordance Perception</a>
    </p>
    <p>
      Yuhao Liu, <b>Yiming Zhong‡</b>, Hanqing Wang, Shaocheng Yan, Yuhang Zhang, Wenzhou Lyu, Ziyang Ding, Wei Zhang, Xue Chao, Jin Pan, Yuexin Ma†, Xinge Zhu†
    </p>
    <p>We introduce UniAfford, a unified framework for generalizable 2D-3D affordance perception. A shared multimodal language model uses token-based task routing and modality-specific decoders to learn from pixel-level and point-level supervision, supporting image, point-cloud, and joint multimodal inputs.</p>
    <a href="https://4dvlab.github.io/UniAfford/" class="paper-box-link" target="_blank">Project page</a>
    <a href="https://github.com/4DVLab/UniAfford" class="paper-box-link" target="_blank">Github <i class="fab fa-github"></i></a>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-image">
    <div>
      <div class="badge-IMWUT"><b>NeurIPS 2026</b></div>
      <img src="images/VideoAfford-combined.webp" alt="VideoAfford overview" width="100%" />
    </div>
  </div>
  <div class="paper-box-text">
    <p>
      <a style="text-decoration: underline;" href="https://arxiv.org/pdf/2602.09638">VideoAfford: Grounding 3D Affordance from Human-Object-Interaction Videos via Multimodal Large Language Model</a>
    </p>
    <p>
      Hanqing Wang, Mingyu Liu, Xiaoyu Chen, Chengwei Ma, <b>Yiming Zhong</b>, Wenti Yin, Yuhao Liu, Zhiqing Cui, Jiahao Yuan, Lu Dai, Zhiyuan Ma†, Hui Xiong†
    </p>
    <p>We introduce VideoAfford and the VIDA dataset to learn 3D affordances from human-object interaction videos. By combining multimodal language models with latent action priors and a spatial-aware loss, VideoAfford enables fine-grained affordance grounding and reasoning with strong open-world generalization.</p>
    <a href="https://arxiv.org/pdf/2602.09638" class="pdf-link" target="_blank">PDF</a>
  </div>
</div>


<h1 id="-honors-and-awards">🎖 Honors and Awards</h1>
<ul>

  <li>
    <a class="red-label">05/2023</a> Mathematical Contest In Modeling (MCM) 
    <span style="color:red;"><b>Finalist Prize (Top 1%)</b></span>
  </li>

  <li>
    <a class="red-label">09/2022</a> China Undergraduate Mathematical Contest in Modeling (CUMCM) 
    <span style="color:red;"><b>National First Prize (Top 0.5%)</b></span>
  </li>

  <li>
    <a class="red-label">10/2025</a> National Scholarship for 2024–2025 
    <span style="color:red;"><b>Outstanding Academic Performance (Top 1%)</b></span>
  </li>

  <li>
    <a class="red-label">11/2025</a> Huahong Scholarship
    <span style="color:red;"><b>(Top 1%)</b></span>
  </li>

  <li>
    <a class="red-label">11/2025</a> Outstanding Master Student
    <span style="color:red;"><b>(Top 5%)</b></span>
  </li>

</ul>

<!-- # 📖 Educations
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
</div> -->

# 📖 Educations

**ShanghaiTech University**  
September 2024 - Now  
Major: Master in Computer Science

**Shandong University**  
September 2020 - July 2024  
Major: B.S. in Statistics; Second Major: Computer Science

<!-- # 💻 Experience 
- *2025.08 - Present*, Algorithm Engineer at <a href="https://www.huawei.com/en/giv/intelligent-automotive-solution-2030">ADS AI Department, IAS BU of Huawei (Yinwang)</a>, focusing on Vision-Language-Action (VLA) models for embodied AI. -->

<h1 id="-hobbies">🎨 Hobbies</h1>
<p style="color: black; margin: 0%; font-weight: 350;">
  
  🚴🏻‍♂️ Cycling, 🎮 FPS Games, 🏀 Basketball
  
</p>
