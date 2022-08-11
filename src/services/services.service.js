import api from './api'

  const getServices = () => {
    console.log('fetching services')
    return api
      .get("v1/services")
      .then(response => {
        return response.data;
      })
      .catch(err=>Promise.reject(err.response.data))
      ;
  }

  const getNotifications = () =>{
    console.log('Geting your Notifications')
    return api
      .get("user/customer/notifications")
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err=>Promise.reject(err.response.data))
  }


  const postJob = (job) => {
    console.log('posting job')
    return api
      .post("jobs/post",
      job
      )
      .then(response => {
        return response.data;
      })
      .catch(err=>Promise.reject(err.response.data))
      ;
  }


  export {
    getServices,
    getNotifications,
    postJob
  }