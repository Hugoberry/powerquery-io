---
title: List.IsEmpty
---

# List.IsEmpty


## Description

如果清單是空的，即傳回 True。


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

如果清單 <code>list</code> 不包含任何值 (長度 0)，即傳回 <code>true</code>。如果清單包含值 (長度 > 0)，則傳回 <code>false</code>。


## Examples

### Example #1 
找出清單 \{} 是不是空的。
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
找出清單 \{1, 2} 是不是空的。
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
