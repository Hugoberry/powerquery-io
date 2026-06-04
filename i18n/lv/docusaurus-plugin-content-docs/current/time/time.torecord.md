---
title: Time.ToRecord
---

# Time.ToRecord


Tiek atgriezts ieraksts, kas ietver Time vērtības daļas.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Atgriež ierakstu, kas ietver norādītās Time vērtības `time` daļas.

-   `time`: `time` vērtība, no kuras tiek aprēķināts tās daļu ieraksts.


## Examples

### Example #1
Pārvērtiet `#time(11, 56, 2)` vērtību par ierakstu, kas ietver Time vērtības.
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
