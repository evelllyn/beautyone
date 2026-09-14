<template>
  <CarouSel/>
  <div class="aboutAs">
    <div class="whyToChoose">
      <div class="skinProblem">
        <div class="col-2"></div>
        <div class="summerSkin col-4">
          <div class="skinText">
            <span>夏天到了</span><br>空氣悶熱，肌膚出油讓毛孔愈來愈大，老廢角質和髒汙不易排除怎麼辦？
          </div>
          <div class="skinText">
            <span>冬天到了</span><br>皮膚的新陳代謝降低，汗水及油脂分泌減少，肌膚容易乾癢、脫屑怎麼辦？
          </div>
        </div>
        <div class="skinImg col-5">
          <img src="../assets/img/skin.png" alt="換季膚況問題">
        </div>
        <div class="col-1"></div>
      </div>
      <div class="aboutContent">
        <div class="slogan">
          <p class="aboutTitle fw-bold">別擔心 ! 不管是敏感肌、混和肌還是乾燥肌<br>在這裡，都能找到屬於您的命定產品</p>
          <div class="dividedLine"></div>
          <p class="sloganBig fw-bold">讓 我 們 與 您 一 起 尋 找 <span>凍 齡</span> 的 秘 密</p>
          <div class="factor">
            <span>肌膚水嫩透亮</span>
            <span>肌底保有彈性</span>
            <span>零細紋平滑肌</span>
          </div>
          <p class="sloganSmall">『 BEAUTY ONE 』&emsp;———————————</p>
          <p class="sloganSmallSec">makes you be the beautiful one 。</p>
        </div>
      </div>
    </div>
  </div>
  <div class="classic container-fluid">
    <p class="words fw-bold">
      <span>HOT SALE</span>
      <span>經典熱銷</span>
    </p>
    <div class="hotSale">
      <BodyProducts :carousel="true"/>
    </div>
  </div>
  <div class="new container-fluid">
    <p class="words fw-bold">
      <span>NEW ARRIVAL</span>
      <span>新品上市</span>
    </p>
    <div class="newArrival">
      <HeadProducts :carousel="true"/>
    </div>
  </div>
  <div class="tips">
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
  </div>
  <div class="subscribe container-fluid">
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
  </div>
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
