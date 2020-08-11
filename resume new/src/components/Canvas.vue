<template>
  <div>
    <div class="collection-outer">
      <div class="collection-title">畫布</div>
      <div class="collection-img-outer">
        <img src="../assets/canvas.jpg" alt />
      </div>
      <div class="collection-content">
        <span>作品內容說明</span>
        <p>畫布，還有一些自己加的動畫，有將原內容做大幅度的更動，為 js 30 days 練習題目，自己有在內容上作一些變化，此作品純為練習作品集用，無使用任何框架，無任何商業用途</p>
        <ul>
          <li>
            <span>GitHub</span>
          </li>
          <li>
            <a href="https://github.com/dreamct25/dreamct25.github.io/tree/master/Canvas">原碼</a>
          </li>
          <li>
            <a href="https://dreamct25.github.io/Canvas/">網頁</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.collection-outer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .collection-title {
    font-size: 30px;
    margin: 20px 0 20px 0;
  }
  .collection-img-outer {
    margin: 0 50px 0 50px;
    overflow: hidden;
    border-radius: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .collection-content {
    width: 400px;
    padding: 0 20px 0 20px;
    text-shadow: 0 2px 1px rgba(0, 0, 0, 0.7);
    span {
      display: block;
      font-size: 20px;
      margin: 20px 0 20px 0;
    }
    p {
      text-align: justify;
      line-height: 1.8em;
    }
    ul {
      text-align: center;
      list-style: none;
      padding-left: 0;
      line-height: 1.8em;
      li {
        span {
          display: block;
          font-size: 20px;
          font-style: italic;
        }
        a {
          color: white;
          transition: 0.5s ease;
          font-size: 18px;
          letter-spacing: 3px;
        }
        a:hover {
          text-decoration: none;
          color: rgb(255, 60, 0);
        }
      }
    }
  }
}
</style>