# cookieselection
### Idea

Let us assume we have two heaps (min (`minHeap`) and max (`maxHeap`)) N elements (integers) and next invariance
* size of `minHeap` is `ceil(N / 2)`
* size of `maxHeap` is `floor(N / 2)`
* if `ordList` is an ordered list of elements then
    * `maxHeap` contains first `floor(N / 2)` elements of `ordList`
    * `minHeap` contains last `ceil(N / 2)` elements of `ordList`

Aforesaid means that first element of `minHeap` either median (if N is odd) or smallest element larger then median

### Complexity

`O(n * log(n))`

---

`./go-test.sh` to test Go solution (`cookieselection.go`)

`npm t` to test Javascript solution (`src/cookieSelection.ts` (since js is not performant enough, I didn't bother about providing kattis ready solution))
