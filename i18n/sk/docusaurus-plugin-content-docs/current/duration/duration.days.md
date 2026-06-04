---
title: Duration.Days
---

# Duration.Days


Vráti časť trvania v dňoch.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Vráti časť `duration` v dňoch.


## Examples

### Example #1
Extrahuje počet dní medzi dvomi dátumami.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
