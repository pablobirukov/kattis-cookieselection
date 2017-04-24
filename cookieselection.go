package main

import (
	"bufio"
	"container/heap"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
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
	stdIn := bufio.NewReader(os.Stdin)
	minH := &IntHeap{}
	heap.Init(minH)

	maxH := &IntHeap{}
	heap.Init(maxH)

	for {
		cmd, err := stdIn.ReadString('\n')
		if err == io.EOF {
			break
		}
		if cmd == "#\n" {
			fmt.Printf("%d\n", heap.Pop(minH))
			rebalance(minH, maxH)
		} else {
			cookie, _ := strconv.Atoi(strings.TrimSpace(cmd))
			if maxH.Len() > 0 && cookie <= -(*maxH)[0] {
				heap.Push(maxH, -cookie)
			} else {
				heap.Push(minH, cookie)
			}
			rebalance(minH, maxH)
		}
	}
}
