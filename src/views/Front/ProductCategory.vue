<template>
  <LoaDing :avtive="isLoading"></LoaDing>
  <div class="category container">
    <ul class="category-nav container">
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'all'}" @click="selectedCategory = 'all'">
          <div class="title">ALL / 所有產品</div>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'head'}" @click="selectedCategory = 'head'">
          <div class="title">HEAD / 頭部產品</div>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'face'}" @click="selectedCategory = 'face'">
          <div class="title">FACE / 臉部產品</div>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'lips'}" @click="selectedCategory = 'lips'">
          <div class="title">LIPS / 唇部產品</div>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'body'}" @click="selectedCategory = 'body'">
          <div class="title">BODY / 全身產品</div>
        </button>
      </li>
      <li class="category-list">
        <button class="category-link" :class="{ active: selectedCategory === 'others'}" @click="selectedCategory = 'others'">
          <div class="title">OTHERS / 其他</div>
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
import HeadProducts from '@/components/CategoryComponents/HeadProducts.vue'
import FaceProducts from '@/components/CategoryComponents/FaceProducts.vue'
import LipsProducts from '@/components/CategoryComponents/LipsProducts.vue'
import BodyProducts from '@/components/CategoryComponents/BodyProducts.vue'
import OtherProducts from '@/components/CategoryComponents/OtherProducts.vue'

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
