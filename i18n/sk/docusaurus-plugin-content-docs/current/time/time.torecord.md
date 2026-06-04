---
title: Time.ToRecord
---

# Time.ToRecord


Vráti záznam obsahujúci časti hodnoty času.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Vráti záznam obsahujúci časti danej hodnoty time `time`.

-   `time`: Hodnota `time`, z ktorej častí sa vypočíta príslušný záznam.


## Examples

### Example #1
Konvertuje hodnotu `#time(11, 56, 2)` na záznam obsahujúci hodnoty času.
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
