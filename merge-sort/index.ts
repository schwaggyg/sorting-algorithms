import {AlgorithmStats, AlgorithmResult} from '../common/utils';

const stats: AlgorithmStats = {
  comparisons: 0,
  swaps: 0,
  time: 0
};

function merge(left: Array<any>, right: Array<any>){
  const result = [];
  const lLen = left.length;
  const rLen = right.length;
  let l = 0;
  let r = 0;
    
  while(l < lLen && r < rLen) {
    if(left[l] < right[r]) {
      stats.comparisons += 1;
      result.push(left[l++]);
    }
    else {
      result.push(right[r++]);
    }
  }  

  return result.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(arr: Array<any>): Array<any> {
  const len = arr.length;

  if (len < 2)
    return arr;

  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Send left and right to the mergeSort to brake it down into pieces then merge those
  return merge(mergeSort(left),mergeSort(right));
}

export default (input: Array<any>): AlgorithmResult => {
  const start = new Date().getTime();
  const result = mergeSort(input);
  stats.time = new Date().getTime() - start;
  return {
    result, stats
  };
};