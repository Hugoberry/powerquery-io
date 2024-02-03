---
title: List.MaxN
---

# List.MaxN


## Description

傳回清單中的最大值。必須指定要傳回的值數目或篩選條件。


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

傳回清單 <code>list</code> 中的最大值。    在資料列排序之後，可指定選擇性的參數進一步篩選結果。選擇性參數 <code>countOrCondition</code> 指定要傳回的值數目或篩選條件。選擇性參數 <code>comparisonCriteria</code> 指定清單中值的比較方式。 <ul>        <li> <code>list</code>: 值清單。</li>        <li> <code>countOrCondition</code>: 如果指定了數字，就會依遞增順序傳回最多包含 <code>countOrCondition</code> 個項目的清單。如果指定了條件，就會傳回最初符合條件的項目清單。一旦有項目不符合條件，就不再考慮其他項目。</li><li><code>comparisonCriteria</code>: [選擇性]<i></i> 可指定選擇性的 <code>comparisonCriteria</code> 值，以決定清單中項目的比較方式。如果這個參數是 null，則使用預設比較子。 </li></ul>



## Category
List.Ordering
