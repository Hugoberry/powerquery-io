---
title: List.Median
---

# List.Median


傳回清單的中間值。


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

傳回清單 <code>list</code> 的中間項目。若清單中不含非 <code>null</code> 的值，此函式會傳回 <code>null</code>。    當項目個數為偶數，且清單中包含完整的日期時間、持續時間、數字或時間，    函式會傳回兩個項目的平均值，否則會取兩個中間項目中的較小者。


## Examples

### Example #1 
找出清單 &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; 的中間值。
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
