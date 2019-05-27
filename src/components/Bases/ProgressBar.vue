<template>
    <div class="progress-bar" :class="progressPercentage" >
        <h3>{{ title }}</h3>
    </div>
</template>

<script>
export default {
    computed: {
        progressPercentage () {
            return `progress-${this.percentage}`;
        }
    },
    props: {
        percentage: {
            type: String,
            required: false,
            default: '0',
            validator: function (value) {
                return parseInt(value) % 10 === 0;
            }
        },
        title:{
            type: String, 
            required: false
        }
    }
}
</script>

<style scoped>
.progress-bar > h3 {
    text-shadow: 0 0 0.05em white;
}

.progress-bar {
    width: 100%;
    border-radius: 0 1em 1em 0;
}
.progress-0 {
    background-color: white;
}

.progress-10 {
    background: rgb(96,156,158);
    background: linear-gradient(90deg, rgba(96,156,158,1) 0%, rgba(96,156,158,1) 10%, rgba(255,255,255,1) 10%); 
}

.progress-20 {
    background: rgb(96,156,158);
    background: linear-gradient(90deg, rgba(96,156,158,1) 0%, rgba(96,156,158,1) 20%, rgba(255,255,255,1) 20%); 
}

.progress-30 {
    background: rgb(96,156,158);
    background: linear-gradient(90deg, rgba(96,156,158,1) 0%, rgba(96,156,158,1) 30%, rgba(255,255,255,1) 30%); 
}
.progress-40 {
    background: rgb(96,156,158);
    background: linear-gradient(90deg, rgba(96,156,158,1) 0%, rgba(96,156,158,1) 40%, rgba(255,255,255,1) 40%); 
}
.progress-50 {
    background: rgb(96,156,158);
    background: linear-gradient(90deg, rgba(96,156,158,1) 0%, rgba(96,156,158,1) 50%, rgba(255,255,255,1) 50%); 
}
.progress-60 {
    background: rgb(96,156,158);
    background: linear-gradient(90deg, rgba(96,156,158,1) 0%, rgba(96,156,158,1) 60%, rgba(255,255,255,1) 60%); 
}
.progress-70 {
    background: rgb(96,156,158);
    background: linear-gradient(90deg, rgba(96,156,158,1) 0%, rgba(96,156,158,1) 70%, rgba(255,255,255,1) 70%); 
}
.progress-80 {
    background: rgb(96,156,158);
    background: linear-gradient(90deg, rgba(96,156,158,1) 0%, rgba(96,156,158,1) 80%, rgba(255,255,255,1) 80%); 
}
.progress-90 {
    background: rgb(96,156,158);
    background: linear-gradient(90deg, rgba(96,156,158,1) 0%, rgba(96,156,158,1) 90%, rgba(255,255,255,1) 90%); 
}
.progress-100 {
    background: rgb(96,156,158);
}
</style>
