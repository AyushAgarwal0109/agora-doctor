import axios from 'axios';

export const getAccessToken = async (token) => {
  var data = JSON.stringify({
    appointment_id: '620e21b47f048f02284c63be',
  });

  var config = {
    method: 'post',
    url: 'http://withdocs1.herokuapp.com/api/v11/user/meetingtoken',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: data,
  };

  return await axios(config)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};