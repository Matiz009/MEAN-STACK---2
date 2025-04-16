console.log(100);
console.log("Hello World");
console.log(true);
setTimeout(() => {
  console.log("Hello World after 2 seconds");
}, 0);
console.log([1, 2, 3, 4, 5]);
console.log(null);
console.log(undefined);

//callbacks in js

function apiCall(callback) {
  setTimeout(() => {
    let data = fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
    callback();
  }, 2000);
}

function callback() {
  console.log("API call completed");
}
apiCall(callback);

//promises in js

function apiCallPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(data);
      resolve(data);
    }, 2000);
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

apiCallPromise().then((data) => {
  console.log(data);
});

//async/await in js

async function apiCallAsync() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

apiCallAsync();
