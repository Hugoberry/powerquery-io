---
title: Time.ToRecord
---

# Time.ToRecord


Vraća zapis koji sadrži delove vrednosti vremena.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Vraća zapis koji sadrži delove date vrednosti vremena, `time`.

-   `time`: Vrednost `time` na osnovu koje se izračunava zapis njenih delova.


## Examples

### Example #1
Konvertovanje vrednosti `#time(11, 56, 2)` u zapis koji sadrži vrednosti vremena.
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
