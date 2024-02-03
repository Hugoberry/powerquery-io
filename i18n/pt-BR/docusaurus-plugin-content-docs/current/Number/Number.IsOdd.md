---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Indica se o valor é ímpar.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Indica se o valor é ímpar. Retornará <code>true</code> se <code>number</code> for um número ímpar; do contrário, <code>false</code> será retornado.


## Examples

### Example #1 
Verifique se 625 é um número ímpar.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Verifique se 82 é um número ímpar.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
