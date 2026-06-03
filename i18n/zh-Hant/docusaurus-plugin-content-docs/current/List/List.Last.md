---
title: List.Last
---

# List.Last


傳回清單的最後一個值，如果是空的則傳回指定的預設值。


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

如果清單是空的，則會傳回指定清單中最後的項目或選用預設值。

-   `list`: 要檢查的清單。
-   `defaultValue`: (選用) 如果清單是空的，要傳回的預設值。若清單為空的且未指定預設值，函式會傳回 `null`。


## Examples

### Example #1
找出清單 \{1, 2, 3\} 中的最後一個值。
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
找出清單 \{\} 中的最後一個值，如果是空的，則為 -1。
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
