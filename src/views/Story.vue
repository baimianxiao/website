<template>
  <div class="story">
    <!-- Story Hero Section -->
    <section class="story-hero">
      <div class="container">
        <h1>魔法少女の魔女裁判</h1>
        <p>世界观与故事背景</p>
      </div>
    </section>

    <!-- World Overview Section -->
    <section class="world-overview">
      <div class="container">
        <h2 class="section-title">世界设定</h2>
        <div class="world-content">
          <div class="world-text">
            <p>
              在这个世界中，存在着一种特殊的基因——「魔女基因」。拥有这种基因的少女被认为是潜在的威胁，
              因此会被强制囚禁在一座神秘的监狱中。这座监狱是一个与世隔绝的空间，被称为「监牢」。
            </p>
            <p>
              然而，这一次的囚禁却与以往不同。当13位拥有魔女基因的少女被关在一起后，
              一个令人震惊的消息传来：「我们之中混入了一位魔女。」这意味着在这些少女中，
              有一个人已经完全觉醒为真正的魔女，她的存在对所有人都构成了致命的威胁。
            </p>
          </div>
          <div class="world-elements">
            <div class="world-element">
              <div class="element-icon"><i class="element-icon-prison"></i></div>
              <h3>监牢</h3>
              <p>一座神秘的监狱，关押着拥有魔女基因的少女们，成为了魔女审判的舞台。</p>
            </div>
            <div class="world-element">
              <div class="element-icon"><i class="element-icon-gene"></i></div>
              <h3>魔女基因</h3>
              <p>一种特殊的基因，拥有者有可能觉醒成为魔女，因此被视为潜在威胁。</p>
            </div>
            <div class="world-element">
              <div class="element-icon"><i class="element-icon-trial"></i></div>
              <h3>魔女审判</h3>
              <p>一场残酷的死亡游戏，目的是找出混入少女之中的真正魔女。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Timeline Section -->
    <section class="story-timeline">
      <div class="container">
        <h2 class="section-title">故事背景</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="event in timeline" :key="event.id">
            <div class="timeline-date">{{ event.period }}</div>
            <div class="timeline-content">
              <h3>{{ event.title }}</h3>
              <p>{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Concepts Section -->
    <section class="key-concepts">
      <div class="container">
        <h2 class="section-title">关键概念</h2>
        <div class="concepts-grid">
          <div class="concept-card card" v-for="concept in keyConcepts" :key="concept.id">
            <h3>{{ concept.title }}</h3>
            <p>{{ concept.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Plot Section -->
    <section class="main-plot">
      <div class="container">
        <h2 class="section-title">主要剧情</h2>
        <div class="plot-content">
          <div class="plot-chapter">
            <h3>序章：囚笼中的少女</h3>
            <p>
              怀着对崭新高中生活的满心期待，樱羽艾玛坠入了梦乡。可第二天醒来，
              她发现自己竟身处昏暗的牢房之中。她没有任何头绪，自己为什么会被抓到这个地方。
              很快，她发现这里还有其他12位少女，她们都和她一样，是突然被带到这里的。
              就在这时，一个冰冷的声音响起：「你们都拥有魔女基因，并且...我们之中混入了一位魔女。」
            </p>
          </div>
          <div class="plot-chapter">
            <h3>第一章：审判的开始</h3>
            <p>
              少女们逐渐了解到自己的处境。她们被关在一座名为「监牢」的神秘监狱中，
              而这座监狱似乎有某种特殊的规则。每隔一段时间，她们必须参加一场「魔女审判」，
              指认她们认为是真正魔女的人。如果指认正确，游戏结束；如果指认错误，
              被指认的人将面临可怕的命运。随着时间的推移，少女们之间的关系变得越来越微妙。
            </p>
          </div>
          <div class="plot-chapter">
            <h3>第二章：信任与背叛</h3>
            <p>
              第一次审判会议即将到来，少女们开始寻找线索，试图找出谁才是真正的魔女。
              有些人选择信任彼此，组成联盟；有些人则独自行动，怀疑身边的每一个人。
              每个人都自己的秘密，每个人都可能在说谎。在这种紧张氛围下，
              少女们的关系开始出现裂痕，信任变成了最稀缺的资源。
            </p>
          </div>
          <div class="plot-chapter">
            <h3>第三章：真相与谎言</h3>
            <p>
              随着审判的进行，监牢中开始发生一系列神秘事件。少女们发现了一些关于这个地方和彼此的线索，
              但这些线索似乎指向了不同的方向。同时，她们也逐渐发现自己拥有某种特殊的能力，
              这些能力或许能够帮助她们找出真相，但也可能让她们陷入更大的危险之中。
            </p>
          </div>
          <div class="plot-chapter">
            <h3>终章：最后的审判</h3>
            <p>
              随着时间的推移，真相逐渐浮出水面。少女们发现，整个「魔女审判」背后隐藏着一个更大的阴谋。
              她们不仅要找出真正的魔女，还要面对一个关于她们自身和整个世界的惊人真相。
              最后的审判不仅关乎她们的生死，还关乎她们能否获得真正的自由。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="story-cta">
      <div class="container">
        <p>准备好亲自体验这个充满谜团和惊险的故事了吗？</p>
        <router-link to="/download" class="btn">立即下载整合包</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Story',
  data() {
    return {
      timeline: [
        {
          id: 1,
          period: "很久之前",
          title: "魔女传说",
          description: "世界上出现了拥有强大魔法力量的魔女，给人类带来了巨大的灾难。人们发现，只有特殊的少女才能对抗这些魔女。"
        },
        {
          id: 2,
          period: "不久前",
          title: "魔女基因的发现",
          description: "科学家们发现了一种特殊的基因——「魔女基因」。拥有这种基因的少女有可能觉醒成为魔女，因此被视为潜在威胁。"
        },
        {
          id: 3,
          period: "现在",
          title: "监牢与审判",
          description: "13位拥有魔女基因的少女被关在神秘的监牢中，被迫参加一场名为「魔女审判」的死亡游戏。"
        }
      ],
      keyConcepts: [
        {
          id: 1,
          title: "魔女基因",
          description: "一种特殊的基因，拥有者有可能觉醒成为魔女。这种基因在觉醒前不会对持有者产生任何影响，但一旦觉醒，持有者将获得强大的魔法力量，同时也会失去人类的理性。"
        },
        {
          id: 2,
          title: "监牢",
          description: "一座神秘的监狱，专门用来关押拥有魔女基因的少女。这座监狱与世隔绝，内部有着各种奇怪的规则和机制。据黑部奈叶香所说，这座监牢有着悠久的历史和复杂的构造。"
        },
        {
          id: 3,
          title: "魔女审判",
          description: "一场残酷的死亡游戏，目的是找出混入少女之中的真正魔女。参与者需要收集证据，进行推理，最终通过投票选出他们认为是魔女的人。"
        },
        {
          id: 4,
          title: "魔法能力",
          description: "拥有魔女基因的少女在特定条件下可以使用魔法能力。例如宝生玛格的「心灵操控」，黑部奈叶香的「魔女杀手」等。这些能力在觉醒前后会有很大的不同。"
        },
        {
          id: 5,
          title: "原罪",
          description: "每个魔法少女都有着自己的「原罪」，这与她们的过去和内心深处的秘密有关。例如宝生玛格的「知晓爱之人」，黑部奈叶香的「来自过去的狙击手」。"
        },
        {
          id: 6,
          title: "二周目",
          description: "游戏的多周目机制，玩家在完成一周目后可以进入二周目，发现更多隐藏的真相和线索，深入了解整个事件的来龙去脉。"
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Story Hero Section */
.story-hero {
  height: 50vh;
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.story-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  opacity: 0.3;
  z-index: 0;
}

.story-hero .container {
  position: relative;
  z-index: 1;
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.story-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.story-hero p {
  font-size: 1.5rem;
  color: var(--text-secondary);
  font-weight: 300;
}

/* World Overview Section */
.world-overview {
  padding: 100px 0;
  background-color: var(--background-color);
}

.world-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.world-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 25px;
}

.world-elements {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.world-element {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  background-color: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.world-element:hover {
  transform: translateX(10px);
  border-color: var(--primary-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.element-icon {
  width: 60px;
  height: 60px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.element-icon i {
  width: 30px;
  height: 30px;
  background-color: white;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
}

.element-icon-prison {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13v6m2 0v6m4-6v6'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13v6m2 0v6m4-6v6'%3E%3C/path%3E%3C/svg%3E");
}

.element-icon-gene {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm2 8h-4v4h4v-4zm0 6h-4v2h4v-2z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm2 8h-4v4h4v-4zm0 6h-4v2h4v-2z'%3E%3C/path%3E%3C/svg%3E");
}

.element-icon-trial {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 10h4M12 8v8'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 10h4M12 8v8'%3E%3C/path%3E%3C/svg%3E");
}

.world-element h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.world-element p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Story Timeline Section */
.story-timeline {
  padding: 100px 0;
  background-color: var(--secondary-color);
  position: relative;
}

.story-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: var(--primary-color);
  transform: translateX(-50%);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  position: relative;
  padding: 40px 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.timeline-date {
  position: absolute;
  top: 50%;
  left: 0;
  width: calc(50% - 40px);
  text-align: right;
  transform: translateY(-50%);
  font-weight: bold;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.timeline-content {
  position: relative;
  left: calc(50% + 40px);
  width: calc(50% - 40px);
  background-color: var(--card-bg);
  padding: 25px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.timeline-content h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

.timeline-content p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Key Concepts Section */
.key-concepts {
  padding: 100px 0;
  background-color: var(--background-color);
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.concept-card {
  padding: 30px;
  border-radius: 8px;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.concept-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: var(--primary-color);
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.concept-card h3 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.concept-card p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Main Plot Section */
.main-plot {
  padding: 100px 0;
  background-color: var(--secondary-color);
}

.plot-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
}

.plot-chapter {
  background-color: var(--card-bg);
  padding: 30px;
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.plot-chapter h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.plot-chapter p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

/* Story CTA Section */
.story-cta {
  padding: 80px 0;
  background-color: var(--primary-color);
  text-align: center;
}

.story-cta p {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 30px;
  font-weight: 300;
}

.story-cta .btn {
  background-color: white;
  color: var(--primary-color);
  font-weight: bold;
}

.story-cta .btn:hover {
  background-color: var(--secondary-color);
  color: white;
  border-color: white;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .story-hero h1 {
    font-size: 3rem;
  }
  
  .world-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .story-timeline::before {
    left: 40px;
  }
  
  .timeline-item::before {
    left: 40px;
  }
  
  .timeline-date {
    width: calc(100% - 80px);
    text-align: left;
    left: 80px;
    top: 0;
    transform: none;
    margin-bottom: 15px;
  }
  
  .timeline-content {
    left: 80px;
    width: calc(100% - 80px);
  }
}

@media (max-width: 768px) {
  .story-hero {
    height: 40vh;
  }
  
  .story-hero h1 {
    font-size: 2.5rem;
  }
  
  .story-hero p {
    font-size: 1.2rem;
  }
  
  .world-overview,
  .story-timeline,
  .key-concepts,
  .main-plot {
    padding: 80px 0;
  }
  
  .concepts-grid {
    grid-template-columns: 1fr;
  }
  
  .plot-chapter {
    padding: 25px;
  }
  
  .plot-chapter h3 {
    font-size: 1.3rem;
  }
  
  .plot-chapter p {
    font-size: 1rem;
  }
  
  .story-cta p {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .story-hero {
    height: 30vh;
  }
  
  .story-hero h1 {
    font-size: 2rem;
  }
  
  .world-overview,
  .story-timeline,
  .key-concepts,
  .main-plot {
    padding: 60px 0;
  }
  
  .world-element {
    flex-direction: column;
    text-align: center;
  }
  
  .story-timeline::before {
    left: 30px;
  }
  
  .timeline-item::before {
    left: 30px;
  }
  
  .timeline-date {
    left: 70px;
    width: calc(100% - 70px);
    font-size: 1rem;
  }
  
  .timeline-content {
    left: 70px;
    width: calc(100% - 70px);
    padding: 20px;
  }
  
  .plot-chapter {
    padding: 20px;
  }
  
  .story-cta {
    padding: 60px 0;
  }
}
</style>