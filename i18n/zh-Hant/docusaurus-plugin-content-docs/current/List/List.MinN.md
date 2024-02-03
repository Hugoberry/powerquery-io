---
title: List.MinN
---

# List.MinN


## Description

傳回清單中的最小值。可指定要傳回的值數目或篩選條件。


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

傳回清單 <code>list</code> 中的最小值。    參數 <code>countOrCondition</code> 指定要傳回的值數目或篩選條件。選擇性參數 <code>comparisonCriteria</code> 指定清單中值的比較方式。 <ul>        <li> <code>list</code>: 值清單。</li>        <li> <code>countOrCondition</code>: 如果指定了數字，就會依遞增順序傳回最多包含 <code>countOrCondition</code> 個項目的清單。如果指定了條件，就會傳回最初符合條件的項目清單。一旦有項目不符合條件，就不再考慮其他項目。如果這個參數是 null，則傳回清單中一個最小的值。</li><li><code>comparisonCriteria</code>: [選擇性]<i></i> 可指定選擇性的 <code>comparisonCriteria</code> 值，以決定清單中項目的比較方式。如果這個參數是 null，則使用預設比較子。 </li></ul>


## Examples

### Example #1 
找出清單 &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; 中前 5 小的值。
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
