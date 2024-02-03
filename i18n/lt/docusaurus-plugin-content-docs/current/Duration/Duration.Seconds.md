---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Pateikia trukmės sekundžių dalį.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Pateikiama <code>duration</code>sekundžių dalis.


## Examples

### Example #1 
Išskleiskite sekundes iš trukmės reikšmės.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
