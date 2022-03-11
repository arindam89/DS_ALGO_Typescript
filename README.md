# AlgorithmsTypescript
 Algorithms and DataStructures Implemented in TypeScript

## Taking Algorithmic Problems from the following

[500 Algo Problems][https://blog.usejournal.com/500-data-structures-and-algorithms-practice-problems-35afe8a1e222]


### Cloning Arrays in JS

Believe it or not, there are reasons we use JavaScript frameworks outside of animations and those sexy accordions that people can't do without. The further you get into high-powered JavaScript applications (assuming you're creating true web applications, not websites), the more the need for basic JavaScript functionalities; i.e. JavaScript utilities that have nothing to do with DOM. One of those basic utilities is the ability to clone an array. Quite often I see developers iterating over array items to create their clone; in reality, cloning an array can be as easy as a `slice`!

To clone the contents of a given array, all you need to do is call slice, providing 0 as the first argument:

```js
var clone = myArray.slice(0);
```

The code above creates clone of the original array; keep in mind that if objects exist in your array, the references are kept; i.e. the code above does not do a "deep" clone of the array contents. To add clone as a native method to arrays, you'd do something like this:

```js
Array.prototype.clone = function() {
	return this.slice(0);
};
```

### Reference and Source

* [Clone Arrays with JavaScript](https://davidwalsh.name/javascript-clone-array)
