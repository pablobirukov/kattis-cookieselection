import BinaryHeap from "./BinaryHeap";

export default function() {
    const minHeap = new BinaryHeap<number>(_ => _);
    const maxHeap = new BinaryHeap<number>(_ => -_);

    /**
     * Keeps invariance. Mutates passed arguments
     */
    const rebalance = (minHeap: BinaryHeap<number>, maxHeap: BinaryHeap<number>) => {
        if (minHeap.size > maxHeap.size + 1) {
            maxHeap.push(minHeap.pop());
        } else if (maxHeap.size > minHeap.size) {
            minHeap.push(maxHeap.pop());
        }
    };

    let command: string | number;
    while(command = readline()) {
        if (command === "#") {
            print(minHeap.pop());
            rebalance(minHeap, maxHeap);
        } else {
            const cookieSize = +command;
            if (maxHeap.size && cookieSize <= maxHeap.content[0]) {
                maxHeap.push(cookieSize);
            } else {
                minHeap.push(cookieSize);
            }
            rebalance(minHeap, maxHeap);
        }
    }
}