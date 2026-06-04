---
title: Duration.ToRecord
---

# Duration.ToRecord


Vráti záznam obsahujúci časti trvania.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Vráti záznam obsahujúci časti hodnoty duration `duration`.

-   `duration`: Hodnota `duration`, z ktorej sa vytvorí záznam.


## Examples

### Example #1
Skonvertujte `#duration(2, 5, 55, 20)` na záznam jeho častí vrátane dní, hodín, minút a sekúnd, ak je to relevantné.
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
