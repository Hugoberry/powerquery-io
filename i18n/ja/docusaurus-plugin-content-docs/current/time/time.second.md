---
title: Time.Second
---

# Time.Second


秒部分を返します。


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

指定された `time`、`datetime`、または `datetimezone` 値 (`dateTime`) の秒部分を返します。


## Examples

### Example #1
datetime 値で秒の値を探します。
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
