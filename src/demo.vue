<template>

    <div>

        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
    <div style="display: flex; justify-content: center;">
        <div style="width: 600px">
            <g-sticky :distance="0">
                <div style="width: 100%;height: 50px;background-color: #2196F3;"></div>
            </g-sticky>
        </div>
    </div>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <div style="display: flex; justify-content: center;">
            <div style="width: 600px">
                <g-sticky :distance="100">
                    <div style="width: 100%;height: 50px;background-color: #1976D2;"></div>
                </g-sticky>
            </div>
        </div>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>
        <p>文本</p>

    </div>


</template>

<script>
    import GSticky from './g-sticky/g-sticky'
    export default {
        name: "demo",
        components: {GSticky},
    };
</script>
<style>
    * {margin: 0; padding: 0; box-sizing: border-box;}
    body {background: white;}
    img {max-width: 100%;}
    p{
        text-align: center;
    }
</style>
<style scoped lang="scss">
</style>
