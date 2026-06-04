---
title: Number.Sqrt
---

# Number.Sqrt


Retorna l'arrel quadrada del nombre .


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Retorna l'arrel quadrada de `number`. Si `number` és nul `Number.Sqrt`, retorna el valor nul. Si és un valor negatiu, es retorna `Number.NaN` (no és un nombre).


## Examples

### Example #1
Troba l'arrel quadrada de 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Troba l'arrel quadrada de 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
