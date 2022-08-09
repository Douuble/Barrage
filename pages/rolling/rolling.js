Page({

  data: {
    glowcolor: '#00FFFFF',
    inputText: '',
    text: '请输入弹幕orz',
    sliderValueOfFontSize: 50,
    fontSize: 300,
    fontColor: 'white',
    backGroundColor: 'black',
    rollingTime: 10,
    speed: 50,
    currentTab: 0,

    colorArr: [{
        color: 'pink'
      },
      {
        color: "red"
      },
      {
        color: "blue"
      },
      {
        color: "yellow"
      },
      {
        color: "white"
      },
      {
        color: "aqua"
      },
      {
        color: "green"
      },
      {
        color: "skyblue"
      },
      {
        color: "pink"
      },
      {
        color: "black"
      }
    ],
    colorArr2: [{
        color: "#FFB6C1"
      },
      {
        color: "#D8BFD8"
      },
      {
        color: "#E6E6FA"
      },
      {
        color: "#B0C4DE"
      },
      {
        color: "#87CEFA"
      },
      {
        color: "#B0E0E6"
      },
      {
        color: "#D4F2E7"
      },
      {
        color: "#90EE90"
      },
      {
        color: "#F5DEB3"
      },
      {
        color: "#EEE8AA"
      },
      {
        color: "#DAA520"
      },
      {
        color: "#F08080"
      },
      {
        color: "#DCDCDC"
      },
      {
        color: "#00FFFFF"
      }
    ],
    designArr: [{
        ziti: "SimSun",
        wenzi: "新宋"
      },
      {
        ziti: "Simhei",
        wenzi: "黑体"
      },
      {
        ziti: "Microsoft Yahei",
        wenzi: "微软雅黑"
      },
      {
        ziti: "Microsoft JhengHei",
        wenzi: "微软正黑体"
      },
      {
        ziti: "KaiTi",
        wenzi: "楷体"
      },
      {
        ziti: "FangSong",
        wenzi: "仿宋"
      }
    ],
    backgfArr: [
      'https://i.loli.net/2021/05/30/uEIBJZCseMa46xQ.jpg',
      'https://i.loli.net/2021/05/30/WJZhdurKHqiAyCD.jpg',
      'https://i.loli.net/2021/05/30/jEitUTBzlVdsCLw.jpg',
      'https://i.loli.net/2021/05/30/gYi6nL3poBy4KrA.jpg',
      'https://i.loli.net/2021/05/30/JOxIg6qd5bjFQhK.jpg',
      'https://i.loli.net/2021/05/30/uRX7nepEdztaN84.jpg',
      'https://i.loli.net/2021/05/30/JVd4kYGf2ZCnAIa.jpg',
      'https://i.loli.net/2021/05/30/gXohLRWdVy6YEkC.jpg',
      'https://i.loli.net/2021/05/30/QdrOclmf1wUNSnj.jpg',
      'https://i.loli.net/2021/05/30/uIQrcSDVJFo9AfL.jpg'
    ],
    backgfArr2: [
      'https://i.loli.net/2021/05/30/MvEg1mx4IlHN978.jpg',
      'https://i.loli.net/2021/05/30/2GHvenzERX3Pa5D.jpg',
      'https://i.loli.net/2021/05/30/5jREYXD2WTPMw73.jpg',
      'https://i.loli.net/2021/05/30/j12lrQJaG43ERcB.jpg',
      'https://i.loli.net/2021/05/30/qVdoBe5hc2ERpCW.jpg',
      'https://i.loli.net/2021/05/30/tu2yFPJ4jwhEx1N.jpg',
      'https://i.loli.net/2021/05/30/umbqTBrlsLW8Zh3.jpg',
      'https://i.loli.net/2021/05/30/4V6pIAlRdJWtjB7.jpg',
      'https://i.loli.net/2021/05/30/MuD7xeKUjTXrNso.jpg',
      'https://i.loli.net/2021/05/30/TwYPcv2kNGaBKlS.jpg'
    ]
  },


  //参数修改功能性函数
  //选择背景颜色
  setbackGroundColor(e) {
    let index = e.target.dataset.index;
    let that = this;
    let selectColor = that.data.colorArr[index].color;
    that.setData({
      backGroundColor: selectColor
    })
  },
  //改变背景图片
  setBackGround(e) {
    let index = e.target.dataset.index;
    let that = this;
    let selectbackground = that.data.backgfArr[index];
    that.setData({
      backgroundpic: selectbackground
    })
  },
  setBackGround2(e) {
    let index = e.target.dataset.index;
    let that = this;
    let selectbackground = that.data.backgfArr2[index];
    that.setData({
      backgroundpic: selectbackground
    })
  },
  // 选择弹幕颜色
  setColor(e) {
    let index = e.target.dataset.index;
    let that = this;
    let selectColor = that.data.colorArr[index].color;
    that.setData({
      fontColor: selectColor
    })
  },
  //选择发光颜色
  setGlowColor(e) {
    let index = e.target.dataset.index;
    let that = this;
    let selectColor = that.data.colorArr2[index].color;
    that.setData({
      glowcolor: selectColor
    })
  },
  //改变滚动速度
  changeSpeed(e) {
    let sliderValue = e.detail.value;
    let that = this;
    that.setData({
      rollingTime: sliderValue * -0.1 + 15,
      speed: sliderValue
    })
  },
  // 改变字号大小
  changeFontSize(e) {
    let sliderValue = e.detail.value;
    let that = this;
    that.setData({
      fontSize: sliderValue * 3 + 150,
      size: sliderValue
    })
  },

  //改变字体形式
  setZiTi(e) {
    let index = e.target.dataset.index;
    let that = this;
    let selectZiTi = that.data.designArr[index].ziti;
    that.setData({
      fontFamily: selectZiTi
    })
  },

  // 获取输入的文字
  inputBlur(e) {
    let that = this;
    let inputValue = e.detail.value;
    that.setData({
      inputText: inputValue
    })
  },
  // 点击发送以显示文字
  send() {
    let that = this;
    that.setData({
      text: that.data.inputText
    })
  },

  //显示对话框
  showModal: function () {
    // 显示遮罩
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear"
    })
    this.animation = animation
    animation.translateY(10).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },

  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  onLoad: function (options) {},


  //切换标签
  changTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})