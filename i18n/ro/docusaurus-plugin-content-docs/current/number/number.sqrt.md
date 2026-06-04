---
title: Number.Sqrt
---

# Number.Sqrt


Returnează rădăcina pătrată a numărului.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Returnează rădăcina pătrată a `number`. Dacă `number` este nul, `Number.Sqrt` returnează nul. Dacă este o valoare negativă, se returnează `Number.NaN` (nu este număr).


## Examples

### Example #1
Găsiţi rădăcina pătrată pentru 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Găsiţi rădăcina pătrată pentru 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
