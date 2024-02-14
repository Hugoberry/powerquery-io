---
title: List.Accumulate
---

# List.Accumulate


リスト内のアイテムから要約値を収集します。


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

<code>accumulator</code> を使用して、リスト <code>list</code> 内のアイテムから要約値を収集します。    省略可能なシード パラメーター <code>seed</code> を設定することもできます。


## Examples

### Example #1 
((state, current) =&gt; state + current ) を使用して、リスト \{1, 2, 3, 4, 5} 内のアイテムから要約値を収集します。
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
