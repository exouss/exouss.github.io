cute Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/zba.jpg",
          img2: "images/zba2.jpg",
          img3: "images/zba3.jpg",
          title: "MY LOVE",
          isOpen: false,
        },
        {
          img1: "images/zba5.jpg",
          img2: "images/cat cute 2.jpg",
          img3: "images/zba4.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "images/cat baby2.jpg",
          img2: "images/cat baby.jpg",
          img3: "images/cat baby3.jpg",
          title: "BABIES",
          isOpen: false,
        },
        {
          img1: "images/cat sleep.jpg",
          img2: "images/cat sleep2.jpg",
          img3: "images/cat sleep 3.jpg",
          title: "SLEEP",
          isOpen: false,
        },
        {
          img1: "images/CAT HERO1.jpg",
          img2: "images/cat hero2.jpg",
          img3: "images/cat hero3.jpg",
          title: "HERO",
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






