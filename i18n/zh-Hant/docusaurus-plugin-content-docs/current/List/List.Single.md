---
title: List.Single
---

# List.Single


針對長度 1 的清單傳回一個清單項目，否則引發錯誤。


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

如果清單 `list` 中只有一個項目，則傳回該項目。 如果不只一個項目或清單空白，則函式會引發錯誤。


## Examples

### Example #1
找出清單 \{1\} 中的一個值。
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
找出清單 \{1, 2, 3\} 中的一個值。
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
