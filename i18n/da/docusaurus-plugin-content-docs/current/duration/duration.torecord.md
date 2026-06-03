---
title: Duration.ToRecord
---

# Duration.ToRecord


Returnerer en post, der indeholder delene af varigheden.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Returnerer en post, der indeholder delene af varighedsværdien, `duration`.

-   `duration`: En værdi af typen `duration`, som posten er oprettet ud fra.


## Examples

### Example #1
Konvertér `#duration(2, 5, 55, 20)` til en post af delene, herunder dage, timer, minutter og evt. sekunder.
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
