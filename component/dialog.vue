<template>
    <div>
        <div class="mask" v-show="show" v-cloak></div>
        <div class="dialog" v-show="show" v-cloak>
            <a v-if='pos=="top"' href="javascript:;" class="top-close" @click="close"></a>
            <slot name="body"></slot>
            <a v-if='pos=="btm"' href="javascript:;" class="btm-close" @click="close"></a>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Dialog',
    props: ['pos','show'],
    watch: {
        show : function(newVal){
            if(newVal){
                this.$emit('showcb');
            }
        }
    },
    methods : {
        close(){
            this.$emit('closecb');
        }
    }

}
</script>

<style lang="scss" scoped>
[v-cloak]{
    display: none;
}
.mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 998;
    background: rgba(0,0,0,.7);
}
.dialog{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 999;
}
.top-close{
    width: .4rem;
    height: .4rem;
    display: block;
    position: absolute;
    right: .2rem;
    top: .2rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAdVJREFUSA21lzFywjAQRZEKu6RKLgE3SBXfIKfAjU/jhlukSutUuUF8iaQJJfYMZL/HYpa1JGsNaAa8lnb/064lC8xut/tYrVbrLMve6rr+Jfthraqqp67r3glwsPS1Pp/PL9TRYOBR1BHagAWmRabGmG/q2D4KzqBbsAYmMvQMFPcqe0jbuNKGHNz4kmtM8wKGcMxRC57TugLfCz4HBWcCvhWeAg2Cl8JToVGwhNN9m+f5a2i1A3o8Hj/JbzNumejOwAsk2AChPVeQQ0ufDYQBkAEcCl/EhCboYr3P2A26qxTmmcfGXLzvmgRGoA+AfldeMqOPAr68JYMRJOGj0IauKijiVGAECDi61FAERRcXHGTr+34yWV+fjJP3ExHpwO/Lsnw+nU4N9Q3lHccG21pb7Pf7H+4fs5PBEgoQhPlENPAksA/qsouN3ZRxinCKj5xENGONoMYXkwiCtUIQ08R4wRoBAHlLjZ3s49RADuM2Ft244oeDBaseLx3uA/sKDIel24MLS7jvVLuUWrwKW82e5FBuy+rxU23IWELh4PYpF9La0IAWxU3Oc+ODzh3i2gn4GHb8L7PoaEudABLhmYOJUh/oN9IXr3+qoMYPcKwbsOjv0t8/VikDmiI0sWoAAAAASUVORK5CYII=) no-repeat;
    background-size: cover;
}
.btm-close{
    width: .6rem;
    height: .6rem;
    margin: .5rem auto;
    display: block;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: cover;
}
</style>
