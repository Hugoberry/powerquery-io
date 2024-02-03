---
title: List.Last
---

# List.Last


## Description

傳回清單的最後一個值，如果是空的則傳回指定的預設值。


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

傳回清單 <code>list</code> 中的最後一個項目，如果清單是空的，則傳回選擇性的預設值 <code>defaultValue</code>。    如果清單是空的，而且未提供預設值，函數會傳回 <code>null</code>。


## Examples

### Example #1 
找出清單 \{1, 2, 3} 中的最後一個值。
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
找出清單 \{} 中的最後一個值，如果是空的，則為 -1。
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
