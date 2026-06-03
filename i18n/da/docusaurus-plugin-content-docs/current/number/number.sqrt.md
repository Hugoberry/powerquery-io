---
title: Number.Sqrt
---

# Number.Sqrt


Returnerer kvadratroden af tallet.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Returnerer kvadratroden af `number`. Hvis `number` er null, returnerer `Number.Sqrt` null. Hvis det er en negativ værdi, returneres `Number.NaN` (ikke et tal).


## Examples

### Example #1
Find kvadratroden af 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Find kvadratroden af 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
