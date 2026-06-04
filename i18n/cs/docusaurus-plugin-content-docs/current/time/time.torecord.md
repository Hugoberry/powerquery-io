---
title: Time.ToRecord
---

# Time.ToRecord


Vrátí záznam obsahující části hodnoty time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Vrátí záznam obsahující části předané hodnoty time `time`.

-   `time`: Hodnota `time`, ze které bude vypočítán záznam jejích částí.


## Examples

### Example #1
Převede hodnotu `#time(11, 56, 2)` na záznam obsahující hodnoty time.
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
