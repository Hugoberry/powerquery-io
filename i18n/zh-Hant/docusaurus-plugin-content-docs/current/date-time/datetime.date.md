---
title: DateTime.Date
---

# DateTime.Date


傳回指定的 date、datetime 或 datetimezone 值的日期元件。


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

如果參數是 `date`、`datetime`，或是 `datetimezone` 值，則傳回 `dateTime` 參數的日期元件，如果參數為 `null`，則傳回 `null`。


## Examples

### Example #1
找出 #datetime(2010, 12, 31, 11, 56, 02) 的日期值。
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
