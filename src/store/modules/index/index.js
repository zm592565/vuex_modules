    const state={
        index: 'index',
        employeeCode: ''
    }

    const mutations={
        //获取登录信息的cookie
        setCompanyCode(state, obj) {
            state.companyCode = obj
        },
        setEmployeeCode(state, obj) {
            state.employeeCode = obj
        },
    }
    
    const actions={

    }

    const getters = {

    }

    export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
      }