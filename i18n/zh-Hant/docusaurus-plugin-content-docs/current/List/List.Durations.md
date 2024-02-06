---
title: List.Durations
---

# List.Durations


已知初始值、計數和累加持續時間值，產生工期值清單。


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

傳回 <code>count</code> <code>duration</code> 值的清單，從 <code>start</code> 開始，並逐次遞增指定的 <code>duration</code> <code>step</code>。


## Examples

### Example #1 
建立 5 個值的清單，從 1 小時開始，並逐次遞增 1 小時。
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
