---
title: List.PositionOf
---

# List.PositionOf


傳回清單中值的位移。


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

傳回值 <code>value</code> 在清單 <code>list</code> 中出現的位移。如果值未出現，則傳回 -1。    可指定選擇性的出現次數參數 <code>occurrence</code>。<ul>   <li><code>occurrence</code>: 要回報的最大出現次數。</li></ul>


## Examples

### Example #1 
找出值 3 在清單 \{1, 2, 3} 中出現的位置。
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
