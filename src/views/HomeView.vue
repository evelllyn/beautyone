<template>
  <CarouSel></CarouSel>
  <div class="aboutAs">
    <div class="whyToChoose">
      <div class="skinProblem">
        <div class="summerSkin">
          <div class="skinText">
            夏天到了，空氣悶熱，肌膚出油讓毛孔愈來愈大，老廢角質和髒汙不易排除怎麼辦？
          </div>
        </div>
        <div class="winterSkin">
          <div class="skinText">
            冬天到了，皮膚的新陳代謝降低，汗水及油脂分泌減少，肌膚容易乾癢、脫屑怎麼辦？
          </div>
        </div>
        <img src="../assets/skin.png" alt="">
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
  <div class="classic">
    <p class="words fw-bold"><span>HOT SALE</span>經典熱銷</p>
    <div class="hotSale">
      <BodyProducts></BodyProducts>
    </div>
  </div>
  <div class="new">
    <p class="words fw-bold"><span>NEW ARRIVAL</span>新品上市</p>
    <div class="newArrival">
      <HeadProducts></HeadProducts>
    </div>
  </div>
  <div class="tips container">
    <div class="container text-light">
      <div class="tipsBox">
        <div class="insideBox py-3 bg-white bg-opacity-10">
          <div class="tipsTitle p-3 fw-bold">養成日常小習慣&emsp;讓你擁有好肌膚</div>
        </div>
        <div class="py-3">
          <div class="tipsBoxBig container">
            <div class="tipsBoxSmall container fw-bold">
              <div class="tipsBoxText bg-white bg-opacity-10">
                <p class="fw-bold">WASHING FACE</p>
                <ul>
                  <li>一天洗臉1-2次即可</li>
                  <li>沒化妝也要卸妝</li>
                  <li>避免重複使用濕毛巾</li>
                </ul>
              </div>
              <div class="tipsBoxText bg-white bg-opacity-10">
                <p class="fw-bold">MOISTURIZING</p>
                <ul>
                  <li>肌膚水分充足就會自然透亮</li>
                  <li>選擇適合自己的保養產品<br>避免太過營養導致毛孔堵塞</li>
                </ul>
              </div>
              <div class="tipsBoxText final-tips bg-white bg-opacity-10">
                <p class="fw-bold">GOOD DIET</p>
                <ul>
                  <li>喝足2000cc的開水</li>
                  <li>飲食清淡並戒糖</li>
                  <li>多吃蔬果攝取維他命C</li>
                </ul>
              </div>
            </div>
            <div class="tipsBoxSmall sec-tips container fw-bold">
              <div class="tipsBoxText bg-white bg-opacity-10">
                <p class="fw-bold">SUN PROTECTION</p>
                <ul>
                  <li>每2-3小時補擦防曬</li>
                  <li>盡量避免於上午11點至<br>下午2點從事戶外活動</li>
                </ul>
              </div>
              <div class="tipsBoxText bg-white bg-opacity-10">
                <p class="fw-bold">IMPROVING SLEEP</p>
                <ul>
                  <li>早睡不熬夜<br>讓身體分泌退黑激素<br>增強皮膚屏障</li>
                </ul>
              </div>
              <div class="tipsBoxText final-tips bg-white bg-opacity-10">
                <p class="fw-bold">CLEAN ENVIRONMENT</p>
                <ul>
                  <li>養成良好的衛生習慣</li>
                  <li>定期清洗更換枕頭套和床單</li>
                  <li>避免在洗手前用手碰臉</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="py-1">
  <div class="subscribe container">
    <form novalidate>
      <div class="subscribe-content row">
        <div class="col-md-7">
          <label for="email" class="fw-bold">訂閱我們，取得<span>最新消息與優惠折扣 !</span></label>
        </div>
        <div class="col-md-5">
          <div class="input-group">
            <input type="email" id="email" name="email" placeholder="&nbsp;請輸入電子信箱" required>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
            <button class="btn text-light" type="submit">訂閱</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <CouponCopy></CouponCopy>
</template>

<script>
import CouponCopy from '@/components/CouponCopy.vue'
import CarouSel from '@/components/CarouSel.vue'
import BodyProducts from '@/components/CategoryComponents/BodyProducts.vue'
import HeadProducts from '@/components/CategoryComponents/HeadProducts.vue'

export default {
  components: {
    CouponCopy,
    CarouSel,
    BodyProducts,
    HeadProducts
  }
}
</script>
