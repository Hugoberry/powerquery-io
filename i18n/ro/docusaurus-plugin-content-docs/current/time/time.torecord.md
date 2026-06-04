---
title: Time.ToRecord
---

# Time.ToRecord


Returnează o înregistrare ce conţine părţi din valoarea pentru oră.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Returnează o înregistrare care conține părți din valoarea de timp dată, `time`.

-   `time`: o valoare `time` pentru care urmează să fie calculată înregistrarea părților sale.


## Examples

### Example #1
Convertiţi valoarea `#time(11, 56, 2)` într-o înregistrare ce conţine valorile pentru oră.
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
