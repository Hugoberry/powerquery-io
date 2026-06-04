---
title: List.Split
---

# List.Split


使用指定页面大小将指定列表拆分为一系列列表。


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

将 `list` 拆分为一系列列表，其中输出列表的第一个元素是包含源列表中前 `pageSize` 个元素的列表， 输出列表的下一个元素是包含源列表中接下来 `pageSize` 个元素的列表，以此类推。



## Category
List.Transformation functions
