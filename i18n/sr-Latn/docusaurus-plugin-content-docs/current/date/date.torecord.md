---
title: Date.ToRecord
---

# Date.ToRecord


Vraća zapis koji sadrži delove vrednosti datuma.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Vraća zapis koji sadrži delove date vrednosti datuma, `date`.

-   `date`: Vrednost `date` na osnovu koje se izračunava zapis njenih delova.


## Examples

### Example #1
Konvertovanje vrednosti `#date(2011, 12, 31)` u zapis koji sadrži delove vrednosti datuma.
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
