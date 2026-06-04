---
title: List.RemoveLastN
---

# List.RemoveLastN


返回一个列表，它从列表末尾删除指定数目的元素。


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

返回一个列表，它从列表 `list` 末尾移除最后 `countOrCondition` 个元素。如果 `list` 包含少于 `countOrCondition` 个元素，则将返回空列表。

-   如果指定了一个数字，则最多移除该数目个项。
-   如果指定了条件，则会移除 `list` 末尾的任何连续匹配项。
-   如果此参数为 null，则仅移除一项。


## Examples

### Example #1
从 \{1, 2, 3, 4, 5\} 创建不带后 3 个数的列表。
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
从 \{5, 4, 2, 6, 4\} 创建一个列表，它以小于 3 的数结尾。
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
