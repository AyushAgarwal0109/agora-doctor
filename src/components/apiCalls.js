import axios from 'axios';

export const getAccessToken = async () => {
  const token = JSON.parse(localStorage.getItem('doctor-token'));

  const data = JSON.stringify({
    appointment_id: '620e21b47f048f02284c63be',
  });

  const config = {
    method: 'post',
    url: 'https://withdocs1.herokuapp.com/api/v11/agora/meetingtoken',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const leaveChannel = async () => {
  const token = JSON.parse(localStorage.getItem('doctor-token'));

  const data = JSON.stringify({
    appointment_id: '620e21b47f048f02284c63be',
  });

  const config = {
    method: 'post',
    url: 'http://withdocs1.herokuapp.com/api/v11/agora/leave',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return await axios(config)
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateStats = async (stats, uplink, downlink) => {
  // console.log('Stats: ', stats);
  const token = JSON.parse(localStorage.getItem('doctor-token'));

  const data = JSON.stringify({
    meeting_id: '620e21b47f048f02284c63be',
    duration: stats.Duration,
    bitrate: stats.SendBitrate,
    bandwidth: stats.OutgoingAvailableBandwidth,
    avgDownlink: downlink / stats.Duration,
    avgUplink: uplink / stats.Duration,
  });

  const config = {
    method: 'post',
    url: 'http://withdocs1.herokuapp.com/api/v11/agora/stats',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return await axios(config)
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getMeetInfo = async () => {
  const token = JSON.parse(localStorage.getItem('doctor-token'));

  const data = JSON.stringify({
    meeting_id: '620e21b47f048f02284c63be',
  });

  const config = {
    method: 'post',
    url: 'http://withdocs1.herokuapp.com/api/v11/agora/meeting',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return await axios(config)
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const renewAccessToken = async () => {
  const token = JSON.parse(localStorage.getItem('doctor-token'));

  const data = JSON.stringify({
    appointment_id: '620e21b47f048f02284c63be',
  });

  const config = {
    method: 'post',
    url: 'http://withdocs1.herokuapp.com/api/v11/agora/renewToken',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  return await axios(config)
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
