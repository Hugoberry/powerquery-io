---
title: Duration.ToRecord
---

# Duration.ToRecord


Mengembalikan rekod yang mengandungi sebahagian tempoh.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Mengembalikan rekod yang mengandungi sebahagian nilai tempoh, `duration`.

-   `duration`: `duration` daripada yang mana rekod dicipta.


## Examples

### Example #1
Tukar `#duration(2, 5, 55, 20)` menjadi rekod bahagiannya termasuk hari, jam, minit dan saat jika berkenaan.
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
