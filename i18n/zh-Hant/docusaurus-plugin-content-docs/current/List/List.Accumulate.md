---
title: List.Accumulate
---

# List.Accumulate


根據清單中的項目累積摘要值。


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

使用 <code>accumulator</code> 根據清單 <code>list</code> 中的項目累積摘要值。    可設定選擇性的種子參數 <code>seed</code>。


## Examples

### Example #1 
使用 ((state, current) =&gt; state + current) 根據清單 \{1, 2, 3, 4, 5} 中的項目累積摘要值。
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
