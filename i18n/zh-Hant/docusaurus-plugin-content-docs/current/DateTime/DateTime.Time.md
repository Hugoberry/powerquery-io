---
title: DateTime.Time
---

# DateTime.Time


## Description

傳回指定之 datetime 值的時間部分。


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

傳回指定之 datetime 值 <code>dateTime</code> 的時間部分。


## Examples

### Example #1 
找出 #datetime(2010, 12, 31, 11, 56, 02) 的時間值。
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
