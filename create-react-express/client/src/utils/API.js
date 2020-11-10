import axios from "axios";

// The getOrders method retrieves orders from the server
export default {
  getOrders: function() {
    return axios.get("/api/orders");
  }
};
 