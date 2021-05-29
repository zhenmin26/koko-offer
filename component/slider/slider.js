// component/slider/slider.js
Component({
  properties: {
    text: {
      type: String,
      value: '示例内容示例内容'
    },
    index: Number
  },
  data: {
    x: 0,  // 注意，这里通过x属性设置的宽度的单位是px
    start_x: 0,
    operations_visible: false
  },
  methods: {
    handleTouchStart: function (event) {
      this.hideAllOperations();
      const { clientX, clientY } = event.touches[0];
      this.setData({
        start_x: clientX,
        start_y: clientY
      });
    },
    handleTouchEnd: function (event) {
      const { clientX, clientY } = event.changedTouches[0];
      const { start_x, start_y } = this.data;

      if (Math.abs(clientY - start_y) > 50)  return; // 处理上下滑动误触左右滑动的情况
      const direction = clientX - start_x;

      // 这里使用1来判断方向，保证用户在非滑动时不触发滚动（有时点击也会产生些许x轴坐标的变化）
      if (direction < -1) {
        this.showOperations();
      } else if (direction > 1) {
        this.hideOperations();
      } else {
        this.toBrandDetail();
      }
    },

    toggle: function () {
      let operations_visible = this.data.operations_visible;

      if (operations_visible) {
        this.hideOperations();
      } else {
        this.showOperations();
      }
    },
    handleDelete () {
      const index = this.properties.index;
      this.hideOperations();
      this.triggerEvent('delete', { index });
    },
    showOperations: function () {
      this.setData({
        x: -140,
        operations_visible: true
      });  
    },
    hideOperations: function () {
      this.setData({
        x: 0,
        operations_visible: false
      });
    },
    emptyFunc: function () {
      return false;
    }
  }
})
