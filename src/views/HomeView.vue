<template>
  <CarouSel></CarouSel>
  <div class="aboutAs">
    <div class="aboutContent">
      <div class="slogan">
        <h2 class="fw-bold">WHAT MAKES YOU BEAUTIFUL</h2>
        <div class="dividedLine"></div>
        <p class="sloganBig fw-bold">讓 我 們 與 您 一 起 尋 找 <span>凍 齡</span> 的 秘 密</p>
        <div class="factor">
          <span class="fs-5">肌膚水嫩透亮</span>
          <span class="fs-5">肌底保有彈性</span>
          <span class="fs-5">零細紋平滑肌</span>
        </div>
        <p class="sloganSmall fs-5">『 BEAUTY ONE 』&emsp;———————————</p>
        <p class="sloganSmallSec fs-5">makes you be the beautiful one 。</p>
      </div>
    </div>
  </div>
  <div class="classic container">
    <h5 class="words fw-bold"><span class="fs-2">HOT SALE</span>經典熱銷</h5>
    <div class="hotSale container">
      <BodyProducts></BodyProducts>
    </div>
  </div>
  <div class="new container">
    <h5 class="words fw-bold"><span class="fs-2">NEW ARRIVAL</span>新品上市</h5>
    <div class="newArrival container">
      <HeadProducts></HeadProducts>
    </div>
  </div>
  <div class="tips container">
    <div class="container text-light">
      <div class="tipsBox">
        <h2 class="py-3 bg-white bg-opacity-10">
          <div class="tipsTitle p-3 fw-bold">養成日常小習慣&emsp;讓你擁有好肌膚</div>
        </h2>
        <div class="py-3">
          <div class="tipsBoxBig container">
            <div class="tipsBoxSmall container fw-bold">
              <div class="tipsBoxText bg-white bg-opacity-10">
                <h3 class="fw-bold">WASHING FACE</h3>
                <ul>
                  <li>一天洗臉1-2次即可</li>
                  <li>沒化妝也要卸妝</li>
                  <li>避免重複使用濕毛巾</li>
                </ul>
              </div>
              <div class="tipsBoxText bg-white bg-opacity-10">
                <h3 class="fw-bold">MOISTURIZING</h3>
                <ul>
                  <li>肌膚水分充足就會自然透亮</li>
                  <li>選擇適合自己的保養產品<br>避免太過營養導致毛孔堵塞</li>
                </ul>
              </div>
              <div class="tipsBoxText final-tips bg-white bg-opacity-10">
                <h3 class="fw-bold">GOOD DIET</h3>
                <ul>
                  <li>喝足2000cc的開水</li>
                  <li>飲食清淡並戒糖</li>
                  <li>多吃蔬果攝取維他命C</li>
                </ul>
              </div>
            </div>
            <div class="tipsBoxSmall sec-tips container fw-bold">
              <div class="tipsBoxText bg-white bg-opacity-10">
                <h3 class="fw-bold">SUN PROTECTION</h3>
                <ul>
                  <li>每2-3小時補擦防曬</li>
                  <li>盡量避免於上午11點至<br>下午2點從事戶外活動</li>
                </ul>
              </div>
              <div class="tipsBoxText bg-white bg-opacity-10">
                <h3 class="fw-bold">IMPROVING SLEEP</h3>
                <ul>
                  <li>早睡不熬夜<br>讓身體分泌退黑激素<br>增強皮膚屏障</li>
                </ul>
              </div>
              <div class="tipsBoxText final-tips bg-white bg-opacity-10">
                <h3 class="fw-bold">CLEAN ENVIRONMENT</h3>
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
import BodyProducts from '@/components/BodyProducts.vue'
import HeadProducts from '@/components/HeadProducts.vue'

export default {
  components: {
    CouponCopy,
    CarouSel,
    BodyProducts,
    HeadProducts
  }
}
</script>
