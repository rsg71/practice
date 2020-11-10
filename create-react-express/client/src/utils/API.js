import axios from "axios";

// The getOrders method retrieves orders from the server
export default {
  getOrders: function() {
     axios.get("/api/orders");
  }
};
 