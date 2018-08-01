
var app = new Vue({
    el : '#app',
    data : {
        firstdialog : false,
        ruledialog : false
    },
    created(){
        this.firstdialog = false;
        this.ruledialog = true;
    },
    mounted(){
        var vm = this;
        $.ajax({
            url : listUrl,
            type : 'post',
            dataType : 'json'
        }).done(function(res){
            console.log(res);
            vm.goods = res.list;
            vm.lists = res.first;
        });
    },
    methods: {
        firstclose(){
            this.firstdialog = false;
            console.log('aa',this.firstdialog);
        },
        firstcbclose(){
            // console.log('close form child');
        }
    }
});
