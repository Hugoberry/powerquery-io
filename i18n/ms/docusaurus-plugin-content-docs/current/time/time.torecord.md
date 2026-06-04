---
title: Time.ToRecord
---

# Time.ToRecord


Mengembalikan rekod yang mengandungi bahagian nilai Masa.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Mengembalikan rekod yang mengandungi sebahagian nilai Masa yang ditentukan, `time`.

-   `time`: Nilai `time` untuk yang mana rekod bahagiannya akan dikira.


## Examples

### Example #1
Tukarkan nilai `#time(11, 56, 2)` kepada rekod yang mengandungi nilai Masa.
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
