---
title: Time.Minute
---

# Time.Minute


分部分を返します。


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

指定された `time`、`datetime`、または `datetimezone` 値 (`dateTime`) の分部分を返します。


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36) で分を探します。
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
