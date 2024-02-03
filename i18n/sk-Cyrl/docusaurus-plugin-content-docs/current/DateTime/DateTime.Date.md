---
title: DateTime.Date
---

# DateTime.Date


## Description

Vráti komponent dátumu vytvorený z danej hodnoty date, datetime alebo datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Vráti komponent dátumu hodnoty <code>dateTime</code>, danej hodnoty <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>.


## Examples

### Example #1 
Vyhľadajte hodnotu dátumu hodnoty #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
