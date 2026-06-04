---
title: Time.ToRecord
---

# Time.ToRecord


Vrne zapis, ki vsebuje dele vrednosti"Time".


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Vrne zapis, ki vsebuje dele dane vrednosti"Time", `time`.

-   `time`: vrednost `time`, iz katere bo izračunan zapis njenih delov.


## Examples

### Example #1
Pretvorite vrednost `#time(11, 56, 2)` v zapis, ki vsebuje vrednosti"Time".
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
