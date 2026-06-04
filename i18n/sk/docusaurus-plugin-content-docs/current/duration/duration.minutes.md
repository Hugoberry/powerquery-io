---
title: Duration.Minutes
---

# Duration.Minutes


Vráti časť trvania v minútach.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Vráti časť `duration` v minútach.


## Examples

### Example #1
Extrahuje minúty z hodnoty trvania.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
