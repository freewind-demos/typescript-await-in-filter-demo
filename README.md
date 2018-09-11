TypeScript "await" in Filter Demo
=================================

在JavaScript里没有办法直接在array的filter里使用`await`的。

只能先在`map`里`await`，得到结果，再使用`Promise.all`拿到值，最后再使用`filter`。

```
npm install
npx ts-node hello.ts
```

输出：

```
[ { filename: '.gitignore', isFile: true, size: 22 },
  { filename: 'README.md', isFile: true, size: 110 },
  { filename: 'hello.ts', isFile: true, size: 480 },
  { filename: 'package-lock.json', isFile: true, size: 3341 },
  { filename: 'package.json', isFile: true, size: 163 },
  { filename: 'tsconfig.json', isFile: true, size: 125 } ]
```