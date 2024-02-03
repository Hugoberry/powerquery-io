---
title: DateTime.Time
---

# DateTime.Time


## Description

指定された datetime 値の時刻部分を返します。


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

指定された datetime 値 <code>dateTime</code> の時刻部分を返します。


## Examples

### Example #1 
#datetime(2010, 12, 31, 11, 56, 02) の時刻値を調べます。
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
