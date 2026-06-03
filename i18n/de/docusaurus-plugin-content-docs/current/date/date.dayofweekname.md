---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Gibt den Namen des Wochentags zurück.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Gibt den Namen des Wochentags für die Angabe "`date`" zurück. Optional kann auch ein Element vom Typ "`culture`" angegeben werden (Beispiel: "de-DE").


## Examples

### Example #1
Ruft den Namen des Wochentags ab.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
