---
title: List.Single
---

# List.Single


為長度 1 的清單傳回一個清單項目，否則擲回例外狀況。


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

如果清單 <code>list</code> 中只有一個項目，即傳回該項目。    如果不止一個項目或清單是空的，函數會擲回例外狀況。


## Examples

### Example #1 
找出清單 \{1} 中的一個值。
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
找出清單 \{1, 2, 3} 中的一個值。
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
