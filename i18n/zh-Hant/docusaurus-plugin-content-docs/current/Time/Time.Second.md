---
title: Time.Second
---

# Time.Second


傳回秒鐘元件。


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

傳回提供的 `time`、`datetime` 或 `datetimezone` 值 `dateTime` 的秒鐘元件。


## Examples

### Example #1
從 datetime 值尋找第二個值。
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
