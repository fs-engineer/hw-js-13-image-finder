const key = '13118160-85f169275baea695b5828e8ed';

function fetchQuery() {
  fetch(
    'https://pixabay.com/api/?key=13118160-85f169275baea695b5828e8ed&q=yellow+flowers&image_type=photo',
  ).then(res => res.json.parse()).then(data=>console.log(data);)
}

