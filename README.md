# localhost 데브 서버로 띄우는 방법.

```bash
$ git clone https://github.com/es5es5/opgg-test.git
$ cd opgg-test


// import submodule
$ git submodule init
$ git submodule sync
$ git submodule update --remote --merge

$ npm install
$ npm run serve


---
App running at:
- Local:   http://localhost:8000/
- Network: http://xxx.xxx.xxx.xxx:8000/
---
```
