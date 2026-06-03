---
title: Duration.ToRecord
---

# Duration.ToRecord


Gibt einen Datensatz mit den Teilen der Dauer zurück.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Gibt einen Datensatz mit den Teilen des duration-Werts "`duration`" zurück.

-   `duration`: Ein `duration`\-Wert, auf dessen Grundlage der Datensatz erstellt wird.


## Examples

### Example #1
Konvertiert `#duration(2, 5, 55, 20)` in einen Datensatz mit seinen Bestandteilen, einschließlich Tage, Stunden, Minuten und Sekunden, sofern zutreffend.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
