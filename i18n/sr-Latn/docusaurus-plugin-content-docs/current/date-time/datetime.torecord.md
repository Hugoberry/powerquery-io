---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Vraća zapis koji sadrži delove vrednosti datuma i vremena.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Vraća zapis koji sadrži delove date vrednosti datuma i vremena, `dateTime`.

-   `dateTime`: Vrednost `datetime` na osnovu koje se izračunava zapis njenih delova.


## Examples

### Example #1
Konvertovanje vrednosti `#datetime(2011, 12, 31, 11, 56, 2)` u zapis koji sadrži vrednosti datuma i vremena.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
