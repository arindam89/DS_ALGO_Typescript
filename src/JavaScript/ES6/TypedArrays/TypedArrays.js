/**
 * === JavaScript typed arrays ===
 *
 * @summary short description for the file
 * @author Arindam Paul <arpaul@amazon.com>
 *
 * Created at     : 2020-01-18 23:31:39
 * Last modified  : 2020-01-19 00:09:44
 */

/**
 * Introduction:
 *
 * JavaScript typed arrays are array-like objects that provide a mechanism
 * for reading and writing raw binary data in memory buffers.
 * As you may already know, Array objects grow and shrink dynamically
 * and can have any JavaScript value. JavaScript engines perform
 * optimizations so that these arrays are fast.
 *
 * However, as web applications become more and more powerful, adding features
 * such as audio and video manipulation, access to raw data using WebSockets,
 * and so forth, it has become clear that there are times when it would be
 * helpful for JavaScript code to be able to quickly and easily manipulate
 * raw binary data. This is where typed arrays come in. Each entry
 * in a JavaScript typed array is a raw binary value in one of
 * a number of supported formats, from 8-bit integers to
 * 64-bit floating-point numbers.
 *
 * However, typed arrays are not to be confused with normal arrays,
 * as calling Array.isArray() on a typed array returns false.
 * Moreover, not all methods available for normal arrays are supported
 * by typed arrays (e.g. push and pop).
 */

/**
 * Buffers and views: typed array architecture:
 * ===
 *
 * To achieve maximum flexibility and efficiency, JavaScript typed arrays split
 * the implementation into buffers and views. A buffer (implemented by the ArrayBuffer object)
 * is an object representing a chunk of data; it has no format to speak of and
 * offers no mechanism for accessing its contents. In order to access
 * the memory contained in a buffer, you need to use a view. A view provides
 * a context — that is, a data type, starting offset, and the number of elements
 * — that turns the data into a typed array.
 *
 * Refer to the typed_array image at this point to see it
 *
 * ArrayBuffer
 * ===
 *
 * The ArrayBuffer is a data type that is used to represent a generic,
 * fixed-length binary data buffer. You can't directly manipulate the contents
 * of an ArrayBuffer; instead, you create a typed array view or a DataView
 * which represents the buffer in a specific format, and use that
 * to read and write the contents of the buffer.
 *
 * Typed array views
 * ===
 *
 * Typed array views have self-descriptive names and provide views
 * for all the usual numeric types like Int8, Uint32, Float64 and so forth.
 * There is one special typed array view, the Uint8ClampedArray.
 * It clamps the values between 0 and 255.
 * This is useful for Canvas data processing.
 *
 * DataView
 * ===
 *
 * The DataView is a low-level interface that provides a getter/setter API
 * to read and write arbitrary data to the buffer. This is useful
 * when dealing with different types of data, for example. Typed array views
 * are in the native byte-order (see Endianness) of your platform.
 * With a DataView you are able to control the byte-order. It is big-endian
 * by default and can be set to little-endian in the getter/setter methods.
 */

/**
 * Types:
 *
 * JavaScript Provides 8 Typed Array types:
 *
 * 'Int8Array' an array of 8-bit signed integers
 * 'Int16Array' an array of 16-bit signed integers
 * 'Int32Array' an array of 32-bit signed integers
 * 'Uint8Array' an array of 8-bit unsigned integers
 * 'Uint16Array' an array of 16-bit unsigned integers
 * 'Uint32Array' an array of 32-bit unsigned integers
 * 'Float32Array' an array of 32-bit floating point numbers
 * 'Float64Array' an array of 64-bit floating point numbers
 *
 * all of them are 'ArrayBufferView' instances.
 * A Typed Array is essentially a view into an 'ArrayBuffer',
 * where every item has the same size, and type.
 *
 * On the other hand, 'DataView' is another view into an 'ArrayBuffer',
 * but in this case the items in the array can have different sizes and types.
 */

// Here’s an example of how to create an array of 8-bit signed integers:
const a = new Int8Array();
// You can pre-allocate n bytes:
const bytes = 1024;
const b = new Int8Array(bytes);

// The main use of TypedArrays is to allow to look into an ArrayBuffer,
// which on its own is opaque (we can’t inspect its content).
// Here’s how we do so: we got this `buffer` ArrayBuffer (above refer to b)
// Those typed arrays are array-like, so now we can inspect the content
// of the buffer via the usual array access techniques, and we have access to
// lots of methods and properties including 'map()', 'reduce()' and so on.

b.map((number, index) =>
  console.log(`Typed Array Int8Array with value ${number} at index ${index}`)
);

// We can also use the ArrayBuffer raw constructor to allocate bytes
let buffer = new ArrayBuffer(16);

// At this point, we have a chunk of memory whose bytes are all pre-initialized
// to 0. There's not a lot we can do with it, though. We can confirm that it is
// indeed 16 bytes long, and that's about it:

if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}

// Now because its a raw ArrayBuffer, before we can really work with this buffer,
// we need to create a view. Let's create a view that treats the data in
// the buffer as an array of 32-bit signed integers:

let int32View = new Int32Array(buffer);

// Now we can access the fields in the array just like a normal array:

for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
// This fills out the 4 entries in the array
// (4 entries at 4 bytes each makes 16 total bytes) with the values 0, 2, 4, and 6.

int32View.map((number, index) =>
  console.log(`Typed Array int32View with value ${number} at index ${index}`)
);

// Best part we can now create a new view on the same buffer and read the data
// differently.

let int16View = new Int16Array(buffer);

// Now it will be double the size the values will be garbage because we have
// completley different notion of how we look at these bytes.

int16View.map((number, index) =>
  console.log(`Typed Array int16View with value ${number} at index ${index}`)
);

/**
 * The main use case for Typed Arrays is to use with WebGL, Web Audio
 * or the Canvas API. Some of the WebGL functions are expecting typed arrays,
 * as they are much more performant than regular JavaScript arrays.
 */

/**
 * === Note ===
 *
 * One thing to keep in mind is that typed arrays don’t let us control
 * the endianness: it uses the byte order of the platform. In general
 * this works out fine, because the main use case as we said is to use
 * the array locally, using one of the multimedia APIs. Also, most consumer
 * computers use little endian since Intel uses that convention. But, if you
 * transfer the data of a Typed Array on a system that uses big endian,
 * the data might be badly encoded and, as such, invalid.
 *
 * In case you need this kind of control over endianness, use 'DataView' instead.
 */

/**
 * Sources:
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
 * * https://flaviocopes.com/typed-arrays/
 * * https://www.html5rocks.com/en/tutorials/webgl/typed_arrays/
 */
