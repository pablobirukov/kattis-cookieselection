package main

import (
	"container/heap"
	"fmt"
	"io"
	"strconv"
)

type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}
func rebalance(minH *IntHeap, maxH *IntHeap) {
	if minH.Len() > maxH.Len()+1 {
		heap.Push(maxH, -(*minH)[0])
		heap.Pop(minH)
	} else if maxH.Len() > minH.Len() {
		heap.Push(minH, -(*maxH)[0])
		heap.Pop(maxH)
	}
}

func main() {
	minH := &IntHeap{}
	heap.Init(minH)

	maxH := &IntHeap{}
	heap.Init(maxH)

	var cmd string
	for {
		_, err := fmt.Scanf("%s", &cmd)
		if err == io.EOF {
			break
		}
		if cmd == "#" {
			fmt.Printf("%d\n", heap.Pop(minH))
			rebalance(minH, maxH)
		} else {
			cookie, _ := strconv.Atoi(cmd)
			if maxH.Len() > 0 && cookie <= -(*maxH)[0] {
				heap.Push(maxH, -cookie)
			} else {
				heap.Push(minH, cookie)
			}
			rebalance(minH, maxH)
		}
	}
}
