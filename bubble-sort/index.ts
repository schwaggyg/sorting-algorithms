import {AlgorithmStats, AlgorithmResult} from '../common/utils';

const stats: AlgorithmStats = {
  comparisons: 0,
  swaps: 0,
  time: 0
};

function bubbleSort(input: Array<any>): Array<any> {
  const result = [].concat(input as any);
  const len = result.length;
  let i, j, temp;

  const start = new Date().getTime();

  // Bubble sort algorithm implementation
  for (i = len - 1; i >= 0; i--) {
    for(j = 1; j <= i; j++) {
      stats.comparisons += 1;
      if(result[j-1] > result[j]) {
        stats.swaps += 1;
        temp = result[j-1];
        result[j-1] = result[j];
        result[j] = temp;
      }
    }
  }
  // Done bubble sorting
  
  stats.time = new Date().getTime() - start;
  return result;
}

export (target: Array<any>): AlgorithmResult => ({
  result: bubbleSort(target),
  stats
});