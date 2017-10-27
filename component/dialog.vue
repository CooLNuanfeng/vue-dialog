<template lang="html">
    <div class="fl-dialog-mask" v-if="mshow">
        <div class="fl-dialog">
            <a v-if='pos=="top"' href="javascript:;" class="fl-close" @click="close">&times;</a>
            <slot name="dialog-header"></slot>
            <slot name="dialog-body"></slot>
            <slot name="dialog-footer"></slot>
            <a v-if='pos=="btm"' href="javascript:;" class="fl-dialog-close" @click="close"></a>
        </div>
    </div>
</template>

<script>
export default {
    name : 'dialog',
    data(){
        return {
            pos : this.closepos,
        }
    },
    props : ['show','closepos'],
    computed: {
      mshow: function () {
          return this.show
      }
    },
    methods: {
        close(){
            this.$emit('closecb');
        }
    }
}
</script>

<style scoped lang="scss">
$opacity: .7;
.fl-dialog-mask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 900;
    background: rgba(0,0,0,$opacity);
}
.fl-dialog{
    position: absolute;
    left: .75rem;
    right: .75rem;
    top: 50%;
    transform: translateY(-50%);
}
.fl-close{
    display: block;
    position: absolute;
    right: .15rem;
    top: .15rem;
    width: .4rem;
    height: .4rem;
    color: #666;
    font-size: .4rem;
    line-height: .4rem;
    text-align: center;
}
.fl-dialog-close{
    position: absolute;
    width: .6rem;
    height: .6rem;
    display: block;
    bottom: -1.2rem;
    left: 50%;
    margin-left: -.3rem;
    background: url(http://static2.51fanli.net/webapp/images/coupon/close.png) no-repeat;
    background-size: 100% 100%;

}
</style>
