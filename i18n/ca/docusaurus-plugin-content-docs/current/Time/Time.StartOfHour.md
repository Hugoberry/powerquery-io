---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Retorna l&#39;inici de l&#39;hora.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Retorna l'inici de l'hora representada per <code>dateTime</code>.    <code>dateTime</code> ha de ser un valor <code>time</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Cerca l&#39;inici de l&#39;hora per al 10 d&#39;octubre de 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
