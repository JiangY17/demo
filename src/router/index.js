import Vue from "vue";
import VueRouter from "vue-router"
import Router from "vue-router";


Vue.use(VueRouter)

const router = new Router({
    mode: 'history',
    routes:[
        {
            path:"/one",
            name:"one",
            component:resolve => require(['../views/One'], resolve),
            children:[
                {
                    path:"/one/listTable",
                    name:"listTable",
                    component:resolve => require(['../components/ListTable'], resolve)
                },
                {
                    path:"/one/edit",
                    name:"edit",
                    component:resolve => require(['../components/Edit'], resolve)
                },
                {
                    path:"/",
                    name:"listTable",
                    component:resolve => require(['../components/ListTable'], resolve)
                }
            ]
        },
        {
            path:"/two",
            name:"two",
            component:resolve => require(['../views/Two'], resolve),
            children:[
                {
                    path:"/two/listTable",
                    name:"listTable",
                    component:resolve => require(['../components/ListTable'], resolve)
                },
                {
                    path:"/two/edit",
                    name:"edit",
                    component:resolve => require(['../components/Edit'], resolve)
                },
                {
                    path:"/",
                    name:"listTable",
                    component:resolve => require(['../components/ListTable'], resolve)
                }
            ]
        },
        {
            path:"/three",
            name:"three",
            component:resolve => require(['../views/Three'], resolve),
        },
        {
            path:"/four",
            name:"four",
            component:resolve => require(['../views/Four'], resolve),
        },
        {
            path:"/five",
            name:"five",
            component:resolve => require(['../views/Five'], resolve),
        },
        {
            path:"/addList",
            name:"edit",
            component:resolve => require(['../components/Edit'], resolve),
        },
        {
            path: '*',
            redirect:"/one/listTable"
        }
    ]
})

export default router