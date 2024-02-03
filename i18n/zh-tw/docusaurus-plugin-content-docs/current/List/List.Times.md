---
title: List.Times
---

# List.Times


## Description

已知初始值、計數和累加持續時間值，產生 time 值的清單。


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

傳回大小為 <code>count</code> 的 <code>time</code> 值清單，從 <code>start</code> 開始。指定的增量 <code>step</code> 是要加到每個值的 <code>duration</code> 值。


## Examples

### Example #1 
建立 4 個值的清單，從中午 (#time(12, 0, 0)) 開始，逐次遞增 1 小時 (#duration(0, 1, 0, 0))。
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
