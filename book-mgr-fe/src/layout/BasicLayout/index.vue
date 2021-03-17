<template>
  <div class="basic-layout">
    <!-- 顶部标题 -->
    <div class="app-header">
      <div class="header-logo">
        <img
          src="https://ncstatic.clewm.net/rsrc/2020/1016/02/4757e4910cb527fc040d019a93ded74f.png?x-oss-process=image/resize,w_750/format,gif/sharpen,100/quality,Q_80/interlace,1/auto-orient,1">
        <span class="title">图书管理系统</span>
      </div>
      <div class="header-menu">
        <span class="hellow-msg">你好，admin</span>
        <a-button type="primary">退出</a-button>
      </div>
    </div>
    <div class="app-header-placeholder"></div>
    <div class="app-content">
      <!-- 左侧导航栏 -->
      <div class="app-left">
        <!-- Web Component -->
        <app-nav />
      </div>
      <!-- 右侧主题区域 -->
      <div class="app-right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import './index.scss';
</style>
