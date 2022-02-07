<template>
    <b-form class="mt-4" @submit.prevent="submitHandler(submitAction)">
        <b-row>
            <b-col cols="4" lg="1" order="1" order-lg="1">
                <label for="amount">{{$t('amount')}}</label>
            </b-col>
            <b-col cols="10" lg="7" order="3" order-lg="2" class="d-none d-lg-block">
                <label for="description">{{$t('description')}}</label>
            </b-col>
            <b-col cols="8" lg="3" order="2" order-lg="3">
                <label for="price">{{$t('price')}}</label>
            </b-col>
        </b-row>
        <b-row v-for="(item, idx) in itemsArr" :key="idx" class="my-0 my-lg-2">
            <b-col cols="4" lg="1" order="1" order-lg="1" class="my-2 my-lg-0">
                <b-input required type="number" min="0" v-model="item.amount" id="amount"></b-input>
            </b-col>
            <b-col cols="10" lg="7" order="3" order-lg="2" class="my-2 my-lg-0">
                <b-input required v-model="item.description" id="description" :placeholder="$t('description')"></b-input>
            </b-col>
            <b-col cols="8" lg="3" order="2" order-lg="3" class="my-2 my-lg-0">
                <b-input-group prepend="$">
                    <b-form-input required v-model="item.price" id="price"></b-form-input>
                </b-input-group>
            </b-col>
            <b-col cols="2" lg="1" order="4" order-lg="4" class="delete-btn d-flex justify-content-end my-2 my-lg-0">
                <b-iconstack v-if="itemsArr.length > 1" id="blank" font-scale="2" variant="danger" type="button" class="icon-btn mx-1 my-auto" @click="removeItem(idx)">
                    <b-icon stacked icon="dash"></b-icon>
                    <b-icon stacked icon="circle"></b-icon>
                </b-iconstack>
            </b-col>
        </b-row>

        <div class="d-flex justify-content-center mt-2 mb-3 my-lg-3" v-bind:class="[{'add-btn': itemsArr.length > 1}]">
            <b-iconstack 
                font-scale="2" variant="success" type="button" class="icon-btn mx-1" @click="addItem()"
            >
                <b-icon stacked icon="plus"></b-icon>
                <b-icon stacked icon="circle"></b-icon>
            </b-iconstack>
        </div>

        <div class="d-flex justify-content-end mt-2">
            <b-button
                type="submit"
                variant="primary"
                class="submit-btn mx-2"
                @click="submitAction = SAVE_ACTION"
            >
                {{$t('save')}}
            </b-button>
            <b-button
                type="submit"
                variant="primary"
                class="submit-btn"
                @click="submitAction = PRINT_ACTION"
            >
                {{$t('print')}}
            </b-button>
        </div>
    </b-form>
</template>


<script>
const SAVE_ACTION = 0
const PRINT_ACTION = 1

export default {
    name: 'TheBiller',

    data: function() {
        return {
            SAVE_ACTION: SAVE_ACTION,
            PRINT_ACTION: PRINT_ACTION,
            itemTemplate: { amount: 0, description: '', price: 0 },
            itemsArr: [],
            submitAction: -1
        }
    },

    created: function() {
        this.itemsArr.push(this.itemTemplate);
    },

    methods: {
        addItem: function() {
            this.itemsArr.push(Object.assign({}, this.itemTemplate));
        },

        removeItem: function(idx) {
            this.itemsArr.splice(idx, 1);
        },

        printAsPdf: function() {
            print()
        },

        saveBill: function() {
            var fName = prompt(this.$t('save-msg'));
            if (fName) {
                localStorage.setItem(fName, JSON.stringify(this.itemsArr));
                alert(this.$t('save-success'));
            }
        },

        submitHandler: function() {
            switch (this.submitAction) {
                case this.SAVE_ACTION:
                    this.saveBill();
                    break;

                case this.PRINT_ACTION:
                    this.printAsPdf();
                    break;
            
                default:
                    break;
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.delete-btn {
    :hover {
        color: #ff8080 !important;
    }
}

.add-btn {
    :hover {
        color: #80ff80 !important;
    }
}

.submit-btn {
    @media (max-width: 576px) {
        width: 50%;
    }
}
</style>