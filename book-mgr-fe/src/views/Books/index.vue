<template>
  <div>
    <a-card>
      <h2>图书管理系统</h2>
      <a-divider></a-divider>
      <space-between>
        <a-input-search placeholder="根据书名搜索" enter-button class="search"></a-input-search>
        <a-button type="primary">添加一条</a-button>
      </space-between>
    </a-card>
    <a-table :dataSource="dataSource" :columns="columns"></a-table>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import './index.scss';
</style>
