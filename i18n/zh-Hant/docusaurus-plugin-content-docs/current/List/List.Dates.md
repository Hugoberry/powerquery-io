---
title: List.Dates
---

# List.Dates


## Description

已知初始值、計數和累加持續時間值，產生 date 值的清單。


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

傳回大小為 <code>count</code> 的 <code>date</code> 值清單，從 <code>start</code> 開始。指定的增量 <code>step</code> 是要加到每個值的 <code>duration</code> 值。


## Examples

### Example #1 
建立 5 個值的清單，從元旦前夕 (#date(2011, 12, 31)) 開始，逐次遞增 1 日 (#duration(1, 0, 0, 0))。
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
