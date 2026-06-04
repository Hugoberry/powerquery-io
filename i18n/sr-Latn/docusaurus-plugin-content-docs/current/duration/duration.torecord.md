---
title: Duration.ToRecord
---

# Duration.ToRecord


Vraća zapis koji sadrži delove trajanja.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Vraća zapis koji sadrži delove vrednosti trajanja, `duration`.

-   `duration`: Element `duration` iz koga se zapis kreira.


## Examples

### Example #1
Konvertovanje `#duration(2, 5, 55, 20)` u zapis njegovih delova, uključujući dane, sate, minute i sekunde ako je primenjivo.
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
