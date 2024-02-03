---
title: List.First
---

# List.First


## Description

傳回清單的第一個值，如果是空的則傳回指定的預設值。


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

傳回清單 <code>list</code> 中的第一個項目，如果清單是空的，則傳回選擇性的預設值 <code>defaultValue</code>。    如果清單是空的，而且未提供預設值，函數會傳回 <code>null</code>。


## Examples

### Example #1 
找出清單 \{1, 2, 3} 中的第一個值。
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
找出清單 \{} 中的第一個值。如果清單是空的，傳回 -1。
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
