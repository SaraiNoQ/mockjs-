<template>
  <div class="book-shop">
    <div class="book-shop-content">
      <div
       class="block"
       v-for="(item, index) in this.info.data"
       :key="index"
      >
        <el-image
         :src="require('../assets/u24.png')"
         class="book-css"
        >
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
        </el-image>
        <div class="book-intro">
          <h3>{{ item.bookname }}</h3>
          <div class="book-intro-detail">
          <div class="book-info">作者：{{item.author}}</div>
          <div class="book-info">朝代：{{item.dynasty}}</div>
          <div class="book-info">版本：{{item.version}}</div>
          <div class="book-info">详情：{{item.detailinfo}}</div>
          </div>
        </div>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      :current-page.sync="currentPage"
      @current-change="page"
      >
    </el-pagination>
    <div class="bottom-info">
      <span>北京中医药大学XXXX团队&nbsp; &nbsp;&nbsp; All Rights Reserved 版权所有&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 技术支持：成都信息工程大学软件工程学院</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  mounted () {
    /**
     * {page} 当前的页数
     * {size} 每页有多少条数据
     * 'book/getBookInfo/1/' + '1'
     */
    this.$axios.get('book/getBookInfo/1/' + this.pageSize).then(resp => {
      if (resp == null) {
        this.$message({
          type: 'error',
          message: '连接网络失败'
        })
      }
      this.info = resp.data
      this.total = this.info.total
      console.log(this.info)
      // console.log(this.info.data.total)
    })
  },
  data () {
    return {
      info: {},
      pageSize: 6,
      total: 50,
      currentPage: 1
    }
  },
  methods: {
    // getBookInfo () {
    //   getRequest('book/getBookInfo/1/1').then(resp => {
    //     console.log(resp)
    //   })
    // },
    page (currentPage) {
      this.$axios.get('book/getBookInfo/' + currentPage + '/' + this.pageSize).then(resp => {
        if (resp == null) {
          this.$message({
            type: 'error',
            message: '连接网络失败'
          })
        }
        this.info = resp.data
        this.total = this.info.total
        console.log(this.info)
      })
    }
  }
}
</script>

<style lang="scss">
$bg-color: rgba(233, 194, 87, 0.685);
main.el-main {
  background: #E8E4E3;
}
.el-main {
  padding-bottom: 0px;
  padding-top: 15px;
}

.bottom-info {
    font-size: 14px;
    color: #7F7F7F;
    font-family: 微软雅黑, sans-serif;
}

.book-shop {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.book-shop-content {
  box-shadow: 0px 0px 6;
  border-radius: 12px;
  background-color: #fff;
  padding: 20px 0 10px 25px;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  margin-bottom: 5px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 35%), 0 0 5px #f9f2e9 inset;
}

.block {
  cursor: pointer;
  line-height: 20px;
  display: flex;
  justify-content: flex-start;
  min-height: 220px;
  height: 250px;
  width: 400px;
  max-width: 400px;
  margin: 6px 5px 12px 0;

  .book-css {
    left: 0px;
    width: 200px;
  }

  .book-intro {
    top: 0px;
    margin-left: 8px;

    h3 {
      margin-bottom: 0px;
      height: 40px;
      width: 180px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
    }

    .book-intro-detail {
      height: 200px;
      width: 180px;
      flex: grid;

      .book-info {
      margin: 10px 0 10px 0;
      text-align: left;
      font-size: 16px;
      }
    }
  }
}

.el-pagination {
  height: 20px;
}
</style>
