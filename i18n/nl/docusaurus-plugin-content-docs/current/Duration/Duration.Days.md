---
title: Duration.Days
---

# Duration.Days


Retourneert het dagengedeelte van een duur.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Retourneert het dagengedeelte van <code>duration</code>.


## Examples

### Example #1 
Extraheer het aantal dagen tussen twee datums.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
