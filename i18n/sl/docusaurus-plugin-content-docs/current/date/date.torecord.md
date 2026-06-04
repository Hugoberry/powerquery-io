---
title: Date.ToRecord
---

# Date.ToRecord


Vrne zapis, ki vsebuje dele vrednosti"date".


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Vrne zapis, ki vsebuje dele dane datumske vrednosti, `date`.

-   `date`: vrednost `date`, iz katere bo izračunan zapis njenih delov.


## Examples

### Example #1
Pretvorite vrednost `#date(2011, 12, 31)` v zapis, ki vsebuje dele datumske vrednosti.
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
