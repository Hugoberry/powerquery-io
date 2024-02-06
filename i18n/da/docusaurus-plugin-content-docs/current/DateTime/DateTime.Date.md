---
title: DateTime.Date
---

# DateTime.Date


Returnerer datokomponenten for den angivne værdi for dato, dato/klokkeslæt og dato/tidszone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Returnerer datokomponenten for <code>dateTime</code>, den angivne værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>.


## Examples

### Example #1 
Find datoværdien for #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
