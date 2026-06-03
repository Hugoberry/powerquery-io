---
title: Duration.ToRecord
---

# Duration.ToRecord


Retourneert een record die de onderdelen van de duur bevat.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Hiermee wordt een record geretourneerd met de onderdelen van de duur-waarde, `duration`.

-   `duration`: een `duration` op basis waarvan de record wordt gemaakt.


## Examples

### Example #1
`#duration(2, 5, 55, 20)` omzetten in een record van de onderdelen, inclusief dagen, uren, minuten en seconden, indien van toepassing.
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
