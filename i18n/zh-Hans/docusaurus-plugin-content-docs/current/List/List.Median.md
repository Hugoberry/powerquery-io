---
title: List.Median
---

# List.Median


## Description

返回列表中的中位数值。


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

返回列表 <code>list</code> 的中位数项。如果列表包含非 <code>null</code> 值，则此函数返回 <code>null</code>。    如果具有偶数项，则函数选择两个中位数项中的较小者，除非列表    完全由日期时间、持续时间、数字或时间组成，在这种情况下，函数返回两个项的平均值。


## Examples

### Example #1 
查找列表 &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; 的中位数。
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
