<template>
  <LoaDing :avtive="isLoading"></LoaDing>
  <div class="category container">
    <ul class="category-nav container">
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'all'}" @click="selectedCategory = 'all'">
          <h6>ALL / 所有產品</h6>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'head'}" @click="selectedCategory = 'head'">
          <h6>HEAD / 頭部產品</h6>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'face'}" @click="selectedCategory = 'face'">
          <h6>FACE / 臉部產品</h6>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'lips'}" @click="selectedCategory = 'lips'">
          <h6>LIPS / 唇部產品</h6>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'body'}" @click="selectedCategory = 'body'">
          <h6>BODY / 全身產品</h6>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'others'}" @click="selectedCategory = 'others'">
          <h6>OTHERS / 其他</h6>
        </button>
      </li>
    </ul>
    <component :is="selectedCategoryComponent">
      <div class="all-content" v-if="selectedCategory === 'all'"></div>
      <div class="head-content" v-else-if="selectedCategory === 'head'"></div>
      <div class="face-content" v-else-if="selectedCategory === 'face'"></div>
      <div class="lips-content" v-else-if="selectedCategory === 'lips'"></div>
      <div class="body-content" v-else-if="selectedCategory === 'body'"></div>
      <div class="others-content" v-else></div>
    </component>
  </div>
</template>

<script>
import HomeProduct from '@/components/HomeProduct.vue'
import HeadProducts from '@/components/HeadProducts.vue'
import FaceProducts from '@/components/FaceProducts.vue'
import LipsProducts from '@/components/LipsProducts.vue'
import BodyProducts from '@/components/BodyProducts.vue'
import OtherProducts from '@/components/OtherProducts.vue'

export default {
  data () {
    return {
      selectedCategory: 'all',
      categoryComponemts: {
        all: HomeProduct,
        head: HeadProducts,
        face: FaceProducts,
        lips: LipsProducts,
        body: BodyProducts,
        others: OtherProducts
      }
    }
  },
  components: {
    HomeProduct,
    HeadProducts,
    FaceProducts,
    LipsProducts,
    BodyProducts,
    OtherProducts
  },
  computed: {
    selectedCategoryComponent () {
      return this.categoryComponemts[this.selectedCategory]
    }
  }
}
</script>
