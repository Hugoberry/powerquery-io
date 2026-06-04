---
title: DateTime.Date
---

# DateTime.Date


Pateikiamas nurodytos datos, datetime arba datetimezone reikšmės datos komponentas.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Pateikiamas `dateTime` parametro datos komponentas, jei parametras yra `datos`, `datos ir laiko` arba `datos ir laiko juostos` reikšmė arba `nulinis`, jei parametras `neapibrėžtas`.


## Examples

### Example #1
Rasti #datetime(2010, 12, 31, 11, 56, 02) datos reikšmę.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
