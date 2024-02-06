---
title: List.DateTimes
---

# List.DateTimes


已知初始值、計數和累加持續時間值，產生 datetime 值的清單。


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

傳回大小為 <code>count</code> 的 <code>datetime</code> 值清單，從 <code>start</code> 開始。指定的增量 <code>step</code> 是要加到每個值的 <code>duration</code> 值。


## Examples

### Example #1 
建立 10 個值的清單，從新年前 5 分鐘 (#datetime(2011, 12, 31, 23, 55, 0)) 開始，逐次遞增 1 分鐘 (#duration(0, 0, 1, 0))。
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
