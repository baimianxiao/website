<template>
  <div class="characters">
    <!-- Characters Header -->
    <section class="characters-header">
      <div class="container">
        <h1>魔法少女们</h1>
        <p>13位拥有不同能力与背景的魔法少女，被困于孤岛，展开一场名为「魔女审判」的死亡游戏。</p>
      </div>
    </section>

    <!-- Characters List -->
    <section class="characters-list">
      <div class="container">
        <div class="characters-grid">
          <div 
            v-for="character in characters" 
            :key="character.id" 
            class="character-card card"
            @click="openCharacterDetail(character)"
          >
            <div class="character-image">
              <template v-if="character.image">
                <img :src="character.image" :alt="character.name" class="character-image-img">
              </template>
              <template v-else>
                <div class="character-image-placeholder" :style="{backgroundImage: `linear-gradient(135deg, ${character.color} 0%, transparent 100%)`}"></div>
              </template>
              <div class="character-number">{{ character.id }}</div>
            </div>
            <div class="character-info">
              <h3>{{ character.name }}</h3>
              <p class="character-title">{{ character.title }}</p>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Character Detail Modal -->
    <div v-if="selectedCharacter" class="character-modal" @click="closeCharacterDetail">
      <div class="character-modal-content" @click.stop>
        <div class="character-modal-header">
          <div class="character-modal-number">{{ selectedCharacter.id }}</div>
          <button class="character-modal-close" @click="closeCharacterDetail">×</button>
        </div>
        <div class="character-modal-body">
          <div class="character-modal-image">
            <template v-if="selectedCharacter.image">
              <img :src="selectedCharacter.image" :alt="selectedCharacter.name" class="character-modal-image-img">
            </template>
            <template v-else>
              <div class="character-modal-image-placeholder" :style="{backgroundImage: `linear-gradient(135deg, ${selectedCharacter.color} 0%, transparent 100%)`}"></div>
            </template>
          </div>
          <div class="character-modal-info">
            <h2>{{ selectedCharacter.name }}</h2>
            <p class="character-modal-title">{{ selectedCharacter.title }}</p>
            <!-- 数据面板已删除 -->
            <div class="character-modal-description">
              <h3>角色简介</h3>
              <p>{{ selectedCharacter.description }}</p>
            </div>
            
            <!-- CG图片展示区域 -->
            <div v-if="selectedCharacter.cgImages && selectedCharacter.cgImages.length > 0" class="character-modal-cg">
              <h3>角色CG</h3>
              <div class="character-cg-grid">
                <div v-for="(cgImg, index) in selectedCharacter.cgImages" :key="index" class="character-cg-item">
                  <img :src="cgImg" :alt="`${selectedCharacter.name} CG ${index + 1}`" class="character-cg-img">
                </div>
              </div>
            </div>
            
            <div class="character-modal-ability">
              <h3>特殊能力</h3>
              <p class="ability-name">{{ selectedCharacter.ability.name }}</p>
              <p class="ability-description">{{ selectedCharacter.ability.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Characters',
  data() {
    return {
      characters: [
        {
          id: 1,
          name: '樱羽艾玛',
          title: '平易近人的魔法少女',
          color: '#FF6B6B',
          description: '樱羽艾玛是一位平易近人的少女。笨拙的她经常把事情搞砸，因此常常受人关照。她相信只要大家齐心协力，就一定可以渡过难关。她的原罪是「过度善良」，为了他人而牺牲自己，甚至忽略了自己的真实感受和需求。',
          image: '@/assets/images/characters/210px-艾玛正常立绘.png',
          cgImages: ['@/assets/images/characters/360px-樱羽艾玛cg1.png', '@/assets/images/characters/360px-樱羽艾玛cg2.png'],
          
          ability: {
            name: '净化之光',
            description: '通过神圣之光进行战斗，可以净化黑暗力量，治疗队友伤势，创造光之护盾，甚至能够复活短暂时间内死亡的生命'
          }
        },
        {
          id: 2,
          name: '二阶堂希罗',
          title: '完美无缺的优等生',
          color: '#4A90E2',
          description: '二阶堂希罗成绩优异、运动全能、家世良好，完美无缺。她深得旁人信赖，在校内也屡任重要活动的主持人。性格冷静，对自己和他人要求严格。她的原罪是「完美的怪物」，总是追求完美而压抑真实的自己。',
          image: '@/assets/images/characters/210px-希罗正常立绘.png',
          cgImages: ['@/assets/images/characters/360px-二阶堂希罗cg1.png'],
          
          ability: {
            name: '冰结魔法',
            description: '通过咒语操控冰元素，能够冻结一切物体，创造冰制武器和防具，甚至可以将整个空间封冻'
          }
        },
        {
          id: 3,
          name: '宝生玛格',
          title: '知晓爱之人',
          color: '#9B59B6',
          description: '宝生玛格是一位诈骗专家，观察力敏锐、头脑灵活、口才了得。她的原罪是"知晓爱之人"，知道一切爱的形状。而无法认知的事物，等同于不存在。由于看透了爱的本质，她对人类的情感感到失望，选择用欺骗来保护自己。',
          image: '@/assets/images/characters/210px-玛格正常立绘.png',
          cgImages: ['@/assets/images/characters/360px-宝生玛格cg1.png', '@/assets/images/characters/360px-宝生玛格cg2.png'],
          
          ability: {
            name: '爱的欺骗',
            description: '能够感知并操控他人的信任和爱意，可以植入虚假记忆，创造情感幻觉，甚至让对方对自己产生无条件的信任'
          }
        },
        {
          id: 4,
          name: '夏目安安',
          title: '家里蹲的魔法使',
          color: '#2ECC71',
          description: '夏目安安是一位"家里蹲"少女。原本她就不擅与人交流，性格拘谨。她经常说"请不要命令吾辈，现在是安睡的时间"。她的原罪是「逃避现实」，通过沉睡来逃避现实中的痛苦和人际关系。',
          image: '@/assets/images/characters/210px-安安正常立绘.png',
          cgImages: ['@/assets/images/characters/360px-夏目安安cg1.png'],
          
          ability: {
            name: '睡魔之力',
            description: '通过睡眠释放魔法能量，可以进入他人的梦境进行探查和操控，也可以在沉睡状态下进行远程魔法攻击'
          }
        },
        {
          id: 5,
          name: '莲见蕾雅',
          title: '王子系魔法少女',
          color: '#F1C40F',
          description: '莲见蕾雅代表色为黄色，是一位王子系魔法少女。她的背景故事是渴望被重病的家人注意，因此衍生出了"固定视线"的魔法能力。',
          
          ability: '固定视线 - 能够吸引他人的注意力'
        },
        {
          id: 6,
          name: '佐伯米莉亚',
          title: '自称大叔的白辣妹',
          color: '#E74C3C',
          description: '佐伯米莉亚是一位"白辣妹"，但会自称"大叔"，并且有着大叔的气质和言行。性格豪爽，说话直率。她的原罪是「渴望被爱」，内心深处非常渴望得到他人的认可和关爱。',
          image: '@/assets/images/characters/210px-米莉亚正常立绘.png',
          cgImages: ['@/assets/images/characters/360px-佐伯米莉亚cg1.png'],
          
          ability: {
            name: '灼热之拳',
            description: '通过拳头释放高温火焰，可以引发爆炸，熔化金属，甚至在空气中制造火焰拳印进行远程攻击'
          }
        },
        {
          id: 7,
          name: '冰上梅露露',
          title: '冰之魔法使',
          color: '#54A0FF',
          description: '冰上梅露露是一位操控冰之力量的魔法少女，性格冷静，举止优雅。她的原罪是「冻结的心灵」，内心因过去的创伤而封闭，难以与他人建立情感连接。',
          image: '@/assets/images/characters/210px-梅露露正常立绘.png',
          cgImages: ['@/assets/images/characters/360px-冰上梅露露cg1.png'],
          
          ability: {
            name: '冰晶魔法',
            description: '操控冰晶的形成和移动，可以制造尖锐的冰刺，创造冰之镜反射魔法，甚至能够将水分子转化为坚硬的冰晶体'
          }
        },
        {
          id: 8,
          name: '橘雪莉',
          title: '怪力侦探',
          color: '#4169E1',
          description: '橘雪莉是一位充满好奇心的元气少女，拥有蓝色的头发和金色的眼睛，梳着独特的环形辫。她性格活泼开朗，喜欢探索和发现真相。作为「怪力侦探」，她不仅有着敏锐的观察力，还拥有超乎常人的力量，在审判游戏中能够用这种力量解决各种难题。她的原罪是「过度追求真相」，为了揭露真相而不顾他人感受，有时甚至会伤害到关心她的人。',
          image: '@/assets/images/characters/210px-雪莉正常立绘.png',
          cgImages: ['@/assets/images/characters/360px-橘雪莉cg1.png', '@/assets/images/characters/360px-橘雪莉cg2.png'],
          
          ability: {
            name: '自然守护',
            description: '与大自然和谐共生，可以召唤森林生物协助战斗，操控植物生长形成防御屏障，甚至能够治愈自然环境的创伤'
          }
        },
        {
          id: 9,
          name: '远野汉娜',
          title: '神秘的魔法少女',
          color: '#6A0DAD',
          description: '远野汉娜是一位充满神秘色彩的魔法少女。她性格冷静，思维缜密，总是能够在关键时刻提供重要的建议。她似乎对魔女审判的机制有着独特的理解。',
          
          ability: '暗黑魔法 - 操控黑暗力量'
        },
        {
          id: 10,
          name: '紫藤亚里沙',
          title: '温柔的治愈系',
          color: '#9370DB',
          description: '紫藤亚里沙是一位温柔善良的魔法少女，与樱羽艾玛关系密切，两人组成了"樱紫"CP。她是游戏中杀人数最少的角色（0杀），性格温和，总是为他人着想。',
          
          ability: '治愈魔法 - 能够治愈他人的伤痛'
        },
        {
          id: 11,
          name: '黑部奈叶香',
          title: '来自过去的狙击手',
          color: '#000000',
          description: '黑部奈叶香的原罪是"来自过去的狙击手"。他对监牢抱有强烈敌意，散发着克制感情的冷酷氛围，拒绝别人靠近。不常说话，为达目的会不计手段平静地做出行动。熟知监牢的构造与历史以及魔女审判的机制。',
          
          ability: '狙击魔法 - 精准的远程攻击能力'
        },
        {
          id: 12,
          name: '泽渡可可',
          title: '活泼可爱的魔法少女',
          color: '#FF9FF3',
          description: '泽渡可可是一位活泼可爱的魔法少女，善于与人交往，总是充满活力。她的声音由比良坂芽衣配音。她的原罪是「害怕孤独」，极度渴望被关注和喜爱，为此不断用笑容和活力掩盖内心的不安。',
          image: '@/assets/images/characters/210px-可可正常立绘.png',
          cgImages: ['@/assets/images/characters/360px-泽渡可可cg1.png', '@/assets/images/characters/360px-泽渡可可cg2.png'],
          
          ability: {
            name: '节奏共鸣',
            description: '通过音乐与万物共鸣，可以操控声波进行攻击，用旋律影响他人情绪，甚至能够通过节奏控制时间流速'
          }
        },
        {
          id: 13,
          name: '城崎诺亚',
          title: '天才科学家',
          color: '#00D2D3',
          description: '城崎诺亚是一位天才科学家，理性思维，善于分析。他总是带着各种发明和实验装置，相信科学能够解释一切现象，包括魔法。他的原罪是「被遗忘的存在」，曾经经历过被重要的人遗忘的痛苦。',
          image: '@/assets/images/characters/210px-诺亚正常立绘.png',
          cgImages: ['@/assets/images/characters/360px-城崎诺亚cg1.png'],
          
          ability: {
            name: '发明创造',
            description: '能够将科学原理与魔法能量结合，制造出各种实用的装置和武器，甚至可以解析并复制其他魔法少女的能力'
          }
        }
      ],
      selectedCharacter: null,
    }
  },
  methods: {
    openCharacterDetail(character) {
      this.selectedCharacter = character;
      document.body.style.overflow = 'hidden';
    },
    closeCharacterDetail() {
      this.selectedCharacter = null;
      document.body.style.overflow = 'auto';
    }
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto';
  }
}
</script>

<style scoped>
/* Characters Header */
.characters-header {
  padding: 80px 0;
  background-color: var(--secondary-color);
  text-align: center;
  position: relative;
}

.characters-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, var(--background-color), transparent);
}

.characters-header h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.characters-header p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Characters List */
.characters-list {
  padding: 100px 0;
  background-color: var(--background-color);
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.character-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  position: relative;
}

.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.character-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.character-image-placeholder {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.character-number {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.character-info {
  padding: 20px;
}

.character-info h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: var(--text-color);
}

.character-title {
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 500;
}

.character-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.character-tag {
  background-color: var(--secondary-color);
  color: var(--text-secondary);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Character Detail Modal */
.character-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.character-modal-content {
  background-color: var(--card-bg);
  border-radius: 12px;
  max-width: 900px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideIn 0.3s ease;
  position: relative;
  border: 2px solid var(--primary-color);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.character-modal-header {
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: var(--secondary-color);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.character-modal-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.character-modal-close {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-secondary);
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.character-modal-close:hover {
  background-color: var(--primary-color);
  color: white;
}

.character-modal-body {
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.character-modal-image {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
}

.character-modal-image-placeholder {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.character-modal-info h2 {
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.character-modal-title {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 25px;
  font-weight: 500;
}

/* 数据面板样式已删除 */

.character-modal-description,
.character-modal-ability {
  margin-bottom: 30px;
}

.character-modal-description h3,
.character-modal-ability h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--text-color);
  position: relative;
  padding-bottom: 10px;
}

.character-modal-description h3::after,
.character-modal-ability h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--primary-color);
}

.character-modal-description p,
.character-modal-ability p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.ability-name {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 10px;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .character-modal-body {
    grid-template-columns: 1fr;
  }
  
  .character-modal-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .characters-header h1 {
    font-size: 2.5rem;
  }
  
  .characters-header p {
    font-size: 1rem;
  }
  
  .characters-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .character-modal-content {
    width: 95%;
  }
  
  .character-modal-body {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .characters-header {
    padding: 60px 0;
  }
  
  .characters-header h1 {
    font-size: 2rem;
  }
  
  .characters-list {
    padding: 60px 0;
  }
  
  .characters-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .character-card {
    max-width: 320px;
    margin: 0 auto;
  }
  
  .character-modal-body {
    padding: 15px;
  }
  
  .character-modal-info h2 {
    font-size: 1.8rem;
  }
}
/* 图片样式 */
.character-image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.character-modal-image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}

/* CG图片样式 */
.character-modal-cg {
  margin-top: 30px;
}

.character-modal-cg h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

.character-cg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
}

.character-cg-item {
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid var(--border-color);
  transition: all 0.3s ease;
}

.character-cg-item:hover {
  border-color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.character-cg-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.character-cg-item:hover .character-cg-img {
  transform: scale(1.05);
}
</style>