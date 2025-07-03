<script setup lang="ts">
import { arText, enText, title } from '../store/style';
</script>

<template>
    <aside>
        <div class="title">HidayahHQ</div>
        <details open>
            <summary class="heading">Title</summary>
            <form>
                <div class="group">
                    <label for="">Size <span>{{ title.size / 10 }}</span></label>
                    <input type="range" min="1" max="100" v-model="title.size" />
                </div>
                <div class="dflex">
                    <label for="">Color</label>
                    <input type="color" v-model="title.color" />
                </div>
                <div class="dflex">
                    <label for="">Background color</label>
                    <input type="color" v-model="title.bg" />
                </div>
                <div class="group">
                    <label for="">Width <span>{{ title.width }}</span></label>
                    <input type="range" min="0" max="474" v-model="title.width" />
                </div>
                <div class="group">
                    <label for="">Text alignment</label>
                    <select v-model="title.textAligment">
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div class="group">
                    <label for="">Alignment</label>
                    <select v-model="title.selfAligment">
                        <option value="start">Start</option>
                        <option value="center">Center</option>
                        <option value="end">End</option>
                    </select>
                </div>
            </form>
        </details>
        <details>
            <summary class="heading">Arabic text</summary>
            <form>
                <div class="group">
                    <label for="">Size <span>{{ arText.size / 10 }}</span></label>
                    <input type="range" min="1" max="100" v-model="arText.size" />
                </div>
                <div class="dflex">
                    <label for="">Color</label>
                    <input type="color" v-model="arText.color" />
                </div>
                <div class="dflex">
                    <label for="">Background color</label>
                    <input type="color" v-model="arText.bg" />
                </div>
                <div class="group">
                    <label for="">Width <span>{{ arText.width }}</span></label>
                    <input type="range" min="0" max="474" v-model="arText.width" />
                </div>
                <div class="group">
                    <label for="">Text alignment</label>
                    <select v-model="arText.textAligment">
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div class="group">
                    <label for="">Alignment</label>
                    <select v-model="arText.selfAligment">
                        <option value="start">Start</option>
                        <option value="center">Center</option>
                        <option value="end">End</option>
                    </select>
                </div>
            </form>
        </details>
        <details>
            <summary class="heading">English text</summary>
            <form>
                <div class="group">
                    <label for="">Size <span>{{ enText.size / 10 }}</span></label>
                    <input type="range" min="1" max="100" v-model="enText.size" />
                </div>
                <div class="dflex">
                    <label for="">Color</label>
                    <input type="color" v-model="enText.color" />
                </div>
                <div class="dflex">
                    <label for="">Background color</label>
                    <input type="color" v-model="enText.bg" />
                </div>
                <div class="group">
                    <label for="">Width <span>{{ enText.width }}</span></label>
                    <input type="range" min="0" max="474" v-model="enText.width" />
                </div>
                <div class="group">
                    <label for="">Text alignment</label>
                    <select v-model="enText.textAligment">
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div class="group">
                    <label for="">Alignment</label>
                    <select v-model="enText.selfAligment">
                        <option value="start">Start</option>
                        <option value="center">Center</option>
                        <option value="end">End</option>
                    </select>
                </div>
            </form>
        </details>
    </aside>
</template>

<style scoped lang="css">

aside{
    display: grid;
    align-content: start;
    gap: 16px;
    overflow-y: auto;
    max-height: 100vh;
}
form {
    padding: 16px;
}

input[type='range'] {
    accent-color: gray;
}

label {
    display: flex;
    justify-content: space-between;
}

.dflex {
    display: flex;
    justify-content: space-between
}

.heading {
    font-size: 18px;
}
</style>