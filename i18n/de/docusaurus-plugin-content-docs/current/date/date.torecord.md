---
title: Date.ToRecord
---

# Date.ToRecord


Gibt einen Datensatz mit Teilen des Datumswerts zurück.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Gibt einen Datensatz mit den Teilen des angegebenen Datumswerts (`date`) zurück.

-   `date`: Ein `date`\-Wert, auf dessen Grundlage der Datensatz mit den zugehörigen Teilen berechnet werden soll.


## Examples

### Example #1
Konvertiert den Wert `#date(2011, 12, 31)` in einen Datensatz mit Teilen aus dem Datumswert.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
