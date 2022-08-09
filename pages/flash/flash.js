Page({
  data: {
      flash: ""
  },
  flash: function() {
      if (null == this.data.intervalId) {
          var n = this, t = (n.data.flash, setInterval(function() {
              n.setData({
                  flash: "on"
              }), setTimeout(function() {
                  n.setData({
                      flash: "off" 
                  });
              }, 100);
          }, 200));
          n.setData({
              intervalId: t
          });
      }
  },
  slowFlash: function() {
      if (null == this.data.intervalId) {
          var n = this, t = (n.data.flash, setInterval(function() {
              n.setData({
                  flash: "on"
              }), setTimeout(function() {
                  n.setData({
                      flash: "off"
                  });
              }, 500);
          }, 600));
          n.setData({
              intervalId: t
          });
      }
  },
  flashLight: function() {
      this.setData({
          flash: "on"
      });
  },
  close: function() {
      var n = this;
      null !== n.data.intervalId && clearInterval(n.data.intervalId), n.setData({
          flash: "off",
          intervalId: null
      });
  }
});