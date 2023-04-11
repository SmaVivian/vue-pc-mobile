const app = {
  state: {
    headerShow: true,
    isMobile: false
    // defaultImg: 'this.src="' + require('@assets/images/default-img.png') + '"', // 默认图片
    // defaultHeadImg:
    //   'this.src="' + require('@assets/images/default-head.svg') + '"', // 默认头像
  },
  mutations: {
    TOGGLE_HEADER: (state, isShow) => {
      state.headerShow = isShow
    },
    TOGGLE_PLAT: (state, isShow) => {
      state.isMobile = isShow
      console.log('是否为移动端', state.isMobile)
    }
  },
  actions: {
    ToggleHeader({ commit }, isShow) {
      commit('TOGGLE_HEADER', isShow)
    },
    TogglePlat({ commit }, val) {
      commit('TOGGLE_PLAT', val)
    },
  }
}

export default app
