---
title: Time.StartOfHour
---

# Time.StartOfHour


Retorna l'inici de l'hora.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Retorna l'inici de l'hora representada per `dateTime`. `dateTime` ha de ser un valor `time`, `datetime` o `datetimezone`.


## Examples

### Example #1
Cerca l'inici de l'hora per al 10 d'octubre de 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
