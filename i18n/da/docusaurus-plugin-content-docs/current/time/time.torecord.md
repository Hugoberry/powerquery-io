---
title: Time.ToRecord
---

# Time.ToRecord


Returnerer en post, der indeholder delene fra klokkeslætsværdien.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Returnerer en post, der indeholder delene fra en bestemt klokkeslætsværdi, `time`.

-   `time`: En værdi af typen `time`, som delenes post skal beregnes ud fra.


## Examples

### Example #1
Konvertér værdien af typen `#time(11, 56, 2)` til en post, der indeholder klokkeslætsværdier.
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
