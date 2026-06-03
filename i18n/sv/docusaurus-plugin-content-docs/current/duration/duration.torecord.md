---
title: Duration.ToRecord
---

# Duration.ToRecord


Returnerar en post som innehåller delarna i varaktigheten.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Returnerar en post som innehåller delarna i varaktighetsvärdet `duration`.

-   `duration`: Ett `duration`\-värde som posten skapas från.


## Examples

### Example #1
Konvertera `#duration(2, 5, 55, 20)` till en post med dess delar: dagar, timmar, minuter och sekunder (om tillämpligt).
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
