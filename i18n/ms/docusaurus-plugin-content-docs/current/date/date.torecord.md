---
title: Date.ToRecord
---

# Date.ToRecord


Mengembalikan rekod yang mengandungi sebahagian nilai tarikh.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Mengembalikan rekod yang mengandungi sebahagian nilai tarikh yang ditentukan, `date`.

-   `date`: Nilai `date` untuk yang mana rekod bahagiannya akan dikira.


## Examples

### Example #1
Tukarkan nilai `#date(2011, 12, 31)` kepada rekod yang mengandungi sebahagian daripada nilai tarikh.
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
