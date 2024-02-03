---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Převede komponentu údajů o časovém pásmu na místní časové pásmo.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Změní údaj o časovém pásmu z hodnoty datetimezone <code>dateTimeZone</code> na údaje o místním časovém pásmu.    Pokud <code>dateTimeZone</code> neobsahuje komponentu časového pásma, přidá se údaj o místním časovém pásmu.


## Examples

### Example #1 
Změnit údaj o časovém pásmu pro hodnotu #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na místní časové pásmo (předpokládá se PST)
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
