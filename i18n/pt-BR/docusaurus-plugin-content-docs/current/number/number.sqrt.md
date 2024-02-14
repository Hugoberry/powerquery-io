---
title: Number.Sqrt
---

# Number.Sqrt


Retorna a raiz quadrada do número.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Retorna a raiz quadrada de <code>number</code>.    Se <code>number</code> for nulo, <code>Number.Sqrt</code> retornará um valor nulo. Se for um valor negativo, <code>Number.NaN</code> será retornado (e não um número).


## Examples

### Example #1 
Localize a raiz quadrada de 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Localize a raiz quadrada de 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
