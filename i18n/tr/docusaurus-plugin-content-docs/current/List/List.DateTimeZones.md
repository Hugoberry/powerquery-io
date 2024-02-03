---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Verilen ilk değer, sayı ve artımlı süre değerinden datetimezone değer listesi oluşturur.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

<code>count</code> boyutunda <code>start</code> konumunda başlayan bir <code>datetimezone</code> değer listesi döndürür. <code>step</code> verilen artışı her değere eklenen bir <code>duration</code> değeridir.


## Examples

### Example #1 
Yıl başından 5 dakika önce başlayan (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)), 1 dakika artan (#duration(0, 0, 1, 0)) 10 değer içeren bir liste oluşturur.
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
