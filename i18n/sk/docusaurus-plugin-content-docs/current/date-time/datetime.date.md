---
title: DateTime.Date
---

# DateTime.Date


Vráti komponent dátumu vytvorený z danej hodnoty date, datetime alebo datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Vráti komponent dátumu parametra `dateTime`, ak je parameter hodnota `date`, `datetime` alebo `datetimezone` alebo `null` ak je parameter `null`.


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
