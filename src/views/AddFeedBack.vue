<template>
  <div>
    <div v-if="!this.receiver.length">
      <p>no receivers for you</p>
    </div>
    <div class="row carddiv" v-if="this.receiver.length">
      <div
        class="col-sm-12 col-md-4 col-lg-3 card1 shadow-lg p-3 mb-5 bg-white rounded"
        v-bind:key="data.receiver_id"
        v-for="data in receiver"
      >
        <div class="card">
          <img class="card-img-top" width="30px" alt="Receiver's image" />
          <div class="card-body">
            <form>
              <h5 class="card-title">{{this.receiver.receiver_name}}</h5>
              <textarea
                class="card-text"
                id="textarea"
                v-model.trim="feedback"
                :class="{ error: submitted && $v.name.$invalid }"
              ></textarea>
              <div v-if="submitted">
                <div v-if="!$v.feedback.required">
                  <p class="text-red text-left">Feedback is required</p>
                </div>
              </div>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                id="btn1"
                @click.prevent="addFeedBack(data.receiver_id, feedback)"
              >Send Feedback</button>
              <p class="card-text">
                <small class="text-muted">Your feedback is important!!</small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import { required } from "vuelidate/lib/validators";
export default {
  name: "AddFeedBack",
  validations: {
    feedback: {
      required
    }
  },
  data() {
    return {
      userservice: new UserService(),
      receiver: [],
      feedback: "",
      submitted: false
    };
  },
  async mounted() {
    let receivers = await this.userservice.getReceiverData().catch(error => {
      console.log(error.response);
    });
    this.receiver = receivers;
    console.log("receivers", receivers);
    if (receivers.data.data.length) {
      receivers.data.data.forEach(element => {
        this.receiver.push(element);
      });
    }
  },
  methods: {
    addFeedBack(id, feedback) {
      this.submitted = true;
      if (this.$v.$invalid) {
        return;
      }
      console.log(id, feedback);
    }
  }
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}
.text-red {
  color: red;
}
</style>