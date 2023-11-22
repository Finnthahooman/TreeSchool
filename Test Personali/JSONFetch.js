let POST = `https://jsonbin.org/finnthahooman/blog \
-H 'authorization: token d37d4302-3bdc-4d88-8038-791bc8974177' \
-d '{ url: "https://remysharp.com" }'`;

let GET = `https://jsonbin.org/me/urls`;

async function getJSON(url = "") {
    fetch('https://jsonbin.org/remy/blog', {
        headers: {
          // example uses 1 minute token restricted to `urls` path
          //authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFDUWpwWEVMeVZVIiwicGF0aCI6IiIsImlhdCI6MTcwMDQ3OTY0OSwiZXhwIjoxNzAwNDc5NzA5fQ.0Y7d4gkV2qKacm79NsUeyxs99XgHDqW1QRdPHFnaI_0',
        }
      }).then(res => res.json()).then(res => {
        console.log(res);
      });
}

getJSON()