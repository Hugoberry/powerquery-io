---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Gibt den Namen des Wochentags zurück.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Gibt den Namen des Wochentags für die Angabe "<code>date</code>" zurück. Optional kann auch ein Element vom Typ "<code>culture</code>" angegeben werden (Beispiel: "de-DE").


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
