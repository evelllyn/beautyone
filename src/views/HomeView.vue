<template>
  <CarouSel/>
  <section class="seasonProblem container-fluid">
    <div class="season-title">
      <h3>OUR SKIN STORY</h3>
      <div class="season-content">
        <p>肌膚天天鬧脾氣，保養功課做不完該怎麼辦？</p>
        <p>不用做功課 ! 我們為你準備好了一年四季的肌膚劇本。</p>
      </div>
    </div>
    <div class="seasonCards">
      <!-- card-01 -->
      <div class="season-card">
        <div class="front">
          <div class="card-overlay">
            <i class="fa-solid fa-hand-point-down"></i>
            <span>spring</span>
          </div>
        </div>
        <div class="back">
          <div class="card-content">
            <h3>春天到了</h3>
            <p>氣溫起伏大，肌膚屏障功能不穩</p>
            <div class="card-capsule">
              <span>溫和清潔</span>
              <span>抗品舒緩</span>
            </div>
          </div>
        </div>
      </div>
      <!-- card-02 -->
      <div class="season-card">
        <div class="front">
          <div class="card-overlay">
            <i class="fa-solid fa-hand-point-down"></i>
            <span>summer</span>
          </div>
        </div>
        <div class="back">
          <div class="card-content">
            <h3>夏天到了</h3>
            <p>皮脂腺活躍，臉部大量出油，汗水與髒污卡在粗大毛孔，引發痘痘發炎</p>
            <div class="card-capsule">
              <span>清爽控油</span>
              <span>高係數防曬</span>
            </div>
          </div>
        </div>
      </div>
      <!-- card-03 -->
      <div class="season-card">
        <div class="front">
          <div class="card-overlay">
            <i class="fa-solid fa-hand-point-down"></i>
            <span>autumn</span>
          </div>
        </div>
        <div class="back">
          <div class="card-content">
            <h3>秋天到了</h3>
            <p>濕度降低，油水失衡，導致肌膚粗糙、緊繃、暗沉無光</p>
            <div class="card-capsule">
              <span>強化肌膚屏障</span>
              <span>補水</span>
            </div>
          </div>
        </div>
      </div>
      <!-- card-04 -->
      <div class="season-card">
        <div class="front">
          <div class="card-overlay">
            <i class="fa-solid fa-hand-point-down"></i>
            <span>winter</span>
          </div>
        </div>
        <div class="back">
          <div class="card-content">
            <h3>冬天到了</h3>
            <p>皮脂與汗水分泌量大減，缺乏油脂鎖水，出現乾癢、脫屑、龜裂</p>
            <div class="card-capsule">
              <span>深層滋潤</span>
              <span>鎖水</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="classic container-fluid">
    <p class="words fw-bold">
      <span>HOT SALE</span>
      <span>經典熱銷</span>
    </p>
    <div class="hotSale">
      <BodyProducts :carousel="true"/>
    </div>
  </section>
  <section class="new container-fluid">
    <p class="words fw-bold">
      <span>NEW ARRIVAL</span>
      <span>新品上市</span>
    </p>
    <div class="newArrival">
      <HeadProducts :carousel="true"/>
    </div>
  </section>
  <div class="slide">
    <div class="slide-line">
      <span>BEAUTY ONE</span>
      <span>BEAUTY ONE</span>
    </div>
  </div>
  <section class="tips">
    <div class="container-fluid text-light">
      <div class="tipsBox">
        <div class="insideBox py-3 bg-white bg-opacity-10">
          <div class="tipsTitle p-3 fw-bold">養成日常小習慣&emsp;讓你擁有好肌膚</div>
        </div>
        <div class="tipsGrid">
          <div class="tipsText bg-white bg-opacity-10">
            <p>WASHING FACE</p>
            <ul>
              <li>一天洗臉1-2次即可，沒化妝也要卸妝</li>
              <li>避免重複使用濕毛巾</li>
            </ul>
          </div>

          <div class="tipsText bg-white bg-opacity-10">
            <p>MOISTURIZING</p>
            <ul>
              <li>肌膚水分充足就會自然透亮</li>
              <li>
                選擇適合自己的保養產品，避免太過營養導致毛孔堵塞
              </li>
            </ul>
          </div>

          <div class="tipsText bg-white bg-opacity-10">
            <p>GOOD DIET</p>
            <ul>
              <li>喝足2000cc的開水</li>
              <li>飲食清淡並戒糖，多吃蔬果攝取維他命C</li>
            </ul>
          </div>

          <div class="tipsText bg-white bg-opacity-10">
            <p>SUN PROTECTION</p>
            <ul>
              <li>每2-3小時補擦防曬</li>
              <li>
                盡量避免於上午11點至下午2點從事戶外活動
              </li>
            </ul>
          </div>

          <div class="tipsText bg-white bg-opacity-10">
            <p>IMPROVING SLEEP</p>
            <ul>
              <li>充足睡眠 7 - 9 小時</li>
              <li>
                早睡不熬夜，讓身體分泌退黑激素增強皮膚屏障
              </li>
            </ul>
          </div>

          <div class="tipsText bg-white bg-opacity-10">
            <p>CLEAN ENVIRONMENT</p>
            <ul>
              <li>定期清洗更換枕頭套和床單</li>
              <li>避免在洗手前用手碰臉</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="subscribe container-fluid">
    <VForm class="vform" v-slot="{ errors }">
      <div class="subscribe-content row">
        <div class="emailLabel col-md-7">
          <label for="email" class="fw-bold">訂閱我們，取得最新消息與優惠折扣 !</label>
        </div>
        <div class="inputBox col-md-5">
          <div class="input-group">
            <VField
              id="email"
              name="Email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['Email'] }"
              placeholder="請輸入Email"
              rules="email|required"
              v-model="userEmail">
            </VField>
            <button
              class="btn text-light"
              type="button"
              :disabled="errors['Email'] || !userEmail"
            >
              訂閱
            </button>
          </div>
          <VErrorMessage
            name="Email"
            class="invalid-feedback">
          </VErrorMessage>
        </div>
      </div>
    </VForm>
  </section>
  <CouponCopy/>
</template>

<script>
import CouponCopy from '@/components/CouponCopy.vue'
import CarouSel from '@/components/CarouSel.vue'
import BodyProducts from '@/components/CategoryComponents/BodyProducts.vue'
import HeadProducts from '@/components/CategoryComponents/HeadProducts.vue'

export default {
  data () {
    return {
      userEmail: ''
    }
  },
  components: {
    CouponCopy,
    CarouSel,
    BodyProducts,
    HeadProducts
  }
}
</script>
