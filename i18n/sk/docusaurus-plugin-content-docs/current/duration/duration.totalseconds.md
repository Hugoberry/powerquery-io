---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Vráti celkový počet sekúnd rozsahu tohto trvania.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Vráti celkový počet sekúnd zahrnutých podľa `duration`.


## Examples

### Example #1
Nájdite celkový počet sekúnd zahrnutých podľa hodnoty trvania.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
