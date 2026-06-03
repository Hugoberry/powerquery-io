---
title: DateTime.Date
---

# DateTime.Date


Gibt die Datumskomponente des angegebenen date-, datetime- oder datetimezone-Werts zurück.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Gibt die Datumskomponente des Parameters `dateTime` zurück, wenn es sich bei dem Parameter um einen `date`\-, `datetime`\- oder `datetimezone`\-Wert handelt. Wenn der Parameter `null` ist, wird `null` zurückgegeben.


## Examples

### Example #1
Ermittelt den Datumswert von "#datetime(2010, 12, 31, 11, 56, 02)".
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
