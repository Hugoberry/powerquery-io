---
title: Time.Second
---

# Time.Second


## Description

Palauttaa sekuntiosan.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Palauttaa annetun <code>time</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvon <code>dateTime</code> sekuntiosan.


## Examples

### Example #1 
Etsi sekuntiarvo päivämäärä ja aika -arvosta.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
