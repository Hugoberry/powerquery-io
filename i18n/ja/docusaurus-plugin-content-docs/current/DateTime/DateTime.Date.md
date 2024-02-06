---
title: DateTime.Date
---

# DateTime.Date


指定された date、datetime、または datetimezone 値の日付部分を返します。


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

<code>dateTime</code>、指定された <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値の日付部分を返します。


## Examples

### Example #1 
#datetime(2010, 12, 31, 11, 56, 02) の日付値を調べます。
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
