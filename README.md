# Geocap QuickStart



```
npm install
webpack
webpack-dev-server 

```

# note on Typescript

```
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

Consider   ```--strictNullChecks``` to avoid passing null/undefined when you shouldnt


Readonly props
```
interface Point {
    readonly x: number;
    readonly y: number;
}
```

Readonly arrays
```
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
```


