<template>

    <div id='app' class="mt-2 bg-yellow p-1 justify-content-center text-center">
        <h3 class="text-center mainHead">{{mainHeader}}</h3>
        <nametemplate></nametemplate>
        <h3 class="text-center mb-0 secondHead">{{secondHeader}}
        <input type="number" name="days" id="days" size="2" v-model="days" min='0' style="text-align:center;" class="daysInput"></h3><br>
    </div>

    <!-- dynamic day selection -->
    <div class="mx-auto text-center mt-2">
        <div v-if="days != 0" class="mx-auto">
            <div v-for="(number,idx) in checkweek">
                <p>Week {{idx+1}}</p>
                <button v-for="num in number" class="btn btn-outline-warning text-dark m-1 mb-3">
                    Day {{num}}
                </button>
            </div><br>
        </div>
    </div>
    

</template>

<script>
import nametemplate from './nametemplate.vue'

export default {
    name: 'TemplateHeader',
    components: {
        nametemplate
    },
    props: ['mainHeader', 'secondHeader', 'day'],
    data() {
        return {
            days: 0,
            daylist: [],
            testlist: 30
        }
    },
    computed: {
        checkweek() {
            let array1 = []
            var array2 = []

            for (let i=1; i<=this.days; i++) {
                array1.push(i)
            }

            if (this.days < 8) {
                array2.push(array1)
                return array2
            }
            else {
                var temp = 0
                var obj1 = []

                for (var num in array1) {
                    if (array1[num] % 7 == 0) {
                        let temparray = array1.slice(temp, array1[num])
                        temp = array1[num]
                        array2.push(temparray)
                    }
                }
                
                if ( (this.days - temp) != 0 ) {
                    for (let number = temp+1; number <= array1.length; number++) {
                        obj1.push(number)
                    }
                    array2.push(obj1)

                }
                // console.log(array2)
                return array2
            }
        }
    }
}

</script>

<style scoped>

.daysInput {
    text-align: center;
    font-family: 'helvetica neue';
    background-color: #f2eee3;
    width: 6%;
}

.mainHead {
    font-size: 40px;
    font-family: 'helvetica neue';
}

.secondHead {
    font-family: 'helvetica neue';
    font-size: 21px;
    font-weight: 150;
}

</style>