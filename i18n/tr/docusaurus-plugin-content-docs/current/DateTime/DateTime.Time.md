---
title: DateTime.Time
---

# DateTime.Time


## Description

Verilen datetime değerinin saat bölümünü döndürür.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

<code>dateTime</code> verilen datetime değerinin saat bölümünü döndürür.


## Examples

### Example #1 
#datetime(2010, 12, 31, 11, 56, 02) değerinin saat değerini bulur.
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
