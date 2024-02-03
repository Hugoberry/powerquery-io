---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Restituisce l&#39;inizio della settimana.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Restituisce l'inizio della settimana contenente<code>dateTime</code>.      <code>dateTime</code> deve essere un valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Trovare l&#39;inizio della settimana per martedì 11 ottobre 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Trovare l&#39;inizio della settimana per martedì 11 ottobre 2011, usando lunedì come inizio della settimana.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
