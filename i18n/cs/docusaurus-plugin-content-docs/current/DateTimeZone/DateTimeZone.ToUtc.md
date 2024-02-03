---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Převede komponentu údajů o časovém pásmu na časové pásmo UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Změní údaj o časovém pásmu z hodnoty datetime <code>dateTimeZone</code> na údaje o časovém pásmu UTC.    Pokud <code>dateTimeZone</code> neobsahuje komponentu časového pásma, přidá se údaj o časovém pásmu UTC.


## Examples

### Example #1 
Změnit údaj o časovém pásmu pro hodnotu #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na časové pásmo UTC
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
