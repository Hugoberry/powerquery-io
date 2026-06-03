---
title: List.Numbers
---

# List.Numbers


给定初始值、计数和可选的增量值来返回数的列表。


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

给定初始值、计数和可选的增量值来返回数的列表。默认增量值为 1。

-   `start`: 列表中的初始值。
-   `count`: 要创建的值数。
-   `increment`: *(可选)*要按其递增的值。如果省略，则值按 1 递增。


## Examples

### Example #1
生成从 1 开始的 10 个连续数的列表。
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
生成从 1 开始的 10 个数的列表，每个后续数按 2 递增。
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
