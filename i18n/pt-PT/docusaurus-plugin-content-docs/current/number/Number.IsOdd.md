---
title: Number.IsOdd
---

# Number.IsOdd


Indica se o valor é ímpar.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Indica se o valor é ímpar. Devolve <code>true</code> se <code>number</code> for um número ímpar; caso contrário, devolve <code>false</code>.


## Examples

### Example #1 
Verificar se 625 é um número ímpar.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Verificar se 82 é um número ímpar.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
