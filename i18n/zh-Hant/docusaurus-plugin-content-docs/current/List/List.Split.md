---
title: List.Split
---

# List.Split


將指定的清單分割為一組使用特定頁面大小的清單。


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

將 <code>list</code> 分割成一組清單，其中輸出清單的第一個元素包含來自來源清單前 <code>pageSize</code> 元素的清單，輸出清單的下一個元素則是包含來自來源清單接下來 <code>pageSize</code> 個元素的清單，以此類推。



## Category
List.Transformation functions
