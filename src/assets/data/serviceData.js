import { createClient } from 'redis';

const client = createClient({
    password: 'PPjCNPAQ52SFcBGWI1y4d4e1lvNue85c',
    socket: {
        host: 'redis-15865.c1.us-east1-2.gce.cloud.redislabs.com',
        port: 15865
    }
});

// Store the drone data in the cache with a key of "droneData" and an expiration time of 10 minutes
redis.set("serviceData", JSON.stringify(serviceData), "EX", 600);

// Retrieve the drone data from the cache by passing the key
redis.get("serviceData", function (err, result) {
    if (err) {
      // Handle error
    } else {
      if (result) {
        // Parse the result as JSON and use it
        const serviceData = JSON.parse(result);
      } else {
        // Data not found in the cache, fetch it from the database or API
      }
    }
  });  


const serviceData = [
    {
        id: 1,
        title: "Rent for a weekend - pay for a day!",
        icon: "ri calendar-line",
    },

    {
        id: 1,
        title: "Only for a day",
        icon: "ri 24-hours-line",
    },

    {
        id: 1,
        title: "The 40 hour day",
        icon: "ri calendar-2-fill",
    },

    {
        id: 1,
        title: "The 3 day rental",
        icon: "ri number-3",
    },
];
export default serviceData;