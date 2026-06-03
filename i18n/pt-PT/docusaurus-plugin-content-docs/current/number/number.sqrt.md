---
title: Number.Sqrt
---

# Number.Sqrt


Devolve a raiz quadrada do número.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Devolve a raiz quadrada de `number`. Se `number` for nulo, `Number.Sqrt` devolverá um valor nulo. Se for um valor negativo, é devolvido `Number.NaN` (Não é um número).


## Examples

### Example #1
Determinar a raiz quadrada de 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Determinar a raiz quadrada de 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
