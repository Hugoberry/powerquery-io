---
title: DateTime.Date
---

# DateTime.Date


Returnează componenta date a valorii date, datetime sau datetimezone specificate.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Returnează componenta dată a parametrului `dateTime` dacă parametrul este o valoare de `dată`, `datetime` sau `datetimezone` sau `nul` dacă parametrul este `nul`.


## Examples

### Example #1
Găsiţi valoarea date a #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
