---
title: DateTime.Date
---

# DateTime.Date


## Description

傳回指定的 date、datetime 或 datetimezone 值的日期元件。


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

傳回指定的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 的日期元件。


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
