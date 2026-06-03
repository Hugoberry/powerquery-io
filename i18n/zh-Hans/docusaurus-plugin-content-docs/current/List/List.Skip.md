---
title: List.Skip
---

# List.Skip


返回一个列表，它在列表开头跳过指定数目的元素。


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

返回跳过列表 `list` 的第一个元素的列表。如果 `list` 是空列表，则返回空列表。 此函数采用可选参数，`countOrCondition`，以支持跳过下面列出的多个值。

-   如果指定了一个数字，则最多跳过该数目个项。
-   如果指定了条件，则会跳过 `list` 开头的任何连续匹配项。
-   如果此参数为 null，则会观察到默认行为。


## Examples

### Example #1
从 \{1, 2, 3, 4, 5\} 创建不带前 3 个数的列表。
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
从 \{5, 4, 2, 6, 1\} 创建一个列表，它以小于 3 的数开头。
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
