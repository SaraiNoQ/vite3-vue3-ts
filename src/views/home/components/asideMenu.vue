<template>
  <a-menu v-model:selectedKeys="selectedKeys" :theme="theme" mode="inline">
    <a-menu-item v-for="(item, index) in router.options.routes[2].children" :key="index">
      <router-link :to="item.path">
        <slot name="icon">
          <home-outlined v-if="index === 0" />
          <user-outlined v-else-if="index === 1" />
          <form-outlined v-else-if="index === 2" />
          <file-add-outlined v-else-if="index === 3" />
          <profile-outlined v-else />
        </slot>
        <slot name="title">
          <span>{{ item.name }}</span>
        </slot>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  UserOutlined,
  HomeOutlined,
  FormOutlined,
  FileAddOutlined,
  ProfileOutlined,
} from "@ant-design/icons-vue";

const router = useRouter();
const selectedKeys = ref<string[]>(["1"]);
const theme = ref<string>("dark");
</script>

<style lang="less"></style>
