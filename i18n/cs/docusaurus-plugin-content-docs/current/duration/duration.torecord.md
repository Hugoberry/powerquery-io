---
title: Duration.ToRecord
---

# Duration.ToRecord


Vrátí záznam obsahující části hodnoty duration.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Vrátí záznam obsahující části hodnoty duration `duration`.

-   `duration`: Hodnota `duration`, ze které je vytvořen záznam.


## Examples

### Example #1
Převede hodnotu `#duration(2, 5, 55, 20)` na záznam obsahující její části včetně dnů, hodin, minut a sekund (pokud je to možné).
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
