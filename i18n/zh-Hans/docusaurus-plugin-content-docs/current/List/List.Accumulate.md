---
title: List.Accumulate
---

# List.Accumulate


## Description

从列表中的项累积汇总值。


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

使用 <code>accumulator</code> 从列表 <code>list</code> 中的项累积汇总值。    可以设置可选的种子参数 <code>seed</code>。


## Examples

### Example #1 
使用 ((state, current) =&gt; state + current ) 从列表 \{1, 2, 3, 4, 5} 中的项累积汇总值。
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
