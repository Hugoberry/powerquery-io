---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Mengembalikan rekod yang mengandungi bahagian nilai datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Mengembalikan rekod yang mengandungi sebahagian nilai datetime yang ditentukan, `dateTime`.

-   `dateTime`: Nilai `datetime` untuk yang mana rekod bahagiannya akan dikira.


## Examples

### Example #1
Tukarkan nilai `#datetime(2011, 12, 31, 11, 56, 2)` kepada rekod yang mengandungi nilai Tarikh dan Masa.
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
