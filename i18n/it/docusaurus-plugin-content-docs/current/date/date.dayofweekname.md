---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Restituisce il nome del giorno della settimana.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Restituisce il nome del giorno della settimana per il valore <code>date</code> specificato. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".


## Examples

### Example #1 
Ottiene il nome del giorno della settimana.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
