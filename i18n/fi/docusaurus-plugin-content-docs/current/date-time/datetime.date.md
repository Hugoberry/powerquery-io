---
title: DateTime.Date
---

# DateTime.Date


Palauttaa annetun date-, datetime- tai datetimezone-arvon päivämääräosan.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Palauttaa `dateTime`\-parametrin päivämääräkomponentin, jos parametri on arvoltaan `date`, `datetime` tai `datetimezone`, tai `tyhjäarvoinen`, jos parametri on `tyhjäarvoinen`.


## Examples

### Example #1
Selvitä kohteen #datetime(2010, 12, 31, 11, 56, 02) päivämääräarvo.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
