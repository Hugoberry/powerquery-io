---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

傳回清單中值的第一個位移。


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

傳回清單 <code>values</code> 中某值第一次出現在清單 <code>list</code> 中的位移。如果找不到發生次數，則傳回 -1。    可指定選擇性的出現次數參數 <code>occurrence</code>。<ul>   <li><code>occurrence</code>: 可傳回的最大發生次數。</li></ul>


## Examples

### Example #1 
找出值 2 或 3 在清單 \{1, 2, 3} 中第一次出現的位置。
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
