---
title: DateTime.Date
---

# DateTime.Date


Vrne komponento"date"navedene vrednosti"date","datetime"ali"datetimezone".


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Vrne komponento"date"parametra `dateTime`, če je parameter `date`, `datetime` ali `datetimezone` oziroma komponento `null`, če ima parameter vrednost `null`.


## Examples

### Example #1
Poiščite datumsko vrednost v"#datetime(2010, 12, 31, 11, 56, 02)".
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
