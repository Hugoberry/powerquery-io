---
title: Time.ToRecord
---

# Time.ToRecord


Gibt einen Datensatz mit den Teilen des time-Werts zurück.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Gibt einen Datensatz mit den Teilen des angegebenen time-Werts (`time`) zurück.

-   `time`: Ein `time`\-Wert, auf dessen Grundlage der Datensatz mit den zugehörigen Teilen berechnet werden soll.


## Examples

### Example #1
Konvertiert den Wert `#time(11, 56, 2)` in einen Datensatz mit time-Werten.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
