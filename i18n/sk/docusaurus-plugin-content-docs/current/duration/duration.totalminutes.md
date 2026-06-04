---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Vráti celkový počet minút rozsahu tohto trvania.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Vráti celkový počet minút zahrnutých podľa `duration`.


## Examples

### Example #1
Nájdite celkový počet minút zahrnutých podľa hodnoty trvania.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
