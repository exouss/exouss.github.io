new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/zba.jpg",
          img2: "images/zba2.jpg",
          img3: "images/zba3.jpg",
          title: "PRETTY",
          isOpen: false,
        },
        {
          img1: "images/zba4.jpg",
          img2: "images/zba5.jpg",
          img3: "images/zba6.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "images/zba7.jpg",
          img2: "images/zba8.jpg",
          img3: "images/zba9.jpg",
          title: "BABIES",
          isOpen: false,
        },
        {
          img1: "images/zba10.jpg",
          img2: "images/zba11.jpg",
          img3: "images/zba12.jpg",
          title: "RANDOM",
          isOpen: false,
        },
        {
          img1: "images/zba13.jpg",
          img2: "images/zba14.jpg",
          img3: "images/zba15.jpg",
          title: "0,02%",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
