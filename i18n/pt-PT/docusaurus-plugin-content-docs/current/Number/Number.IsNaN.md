---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Indica se o valor é NaN (Não é um número).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Indica se o valor é NaN (Não é um número). Devolve <code>true</code> se <code>number</code> for equivalente a <code>Number.IsNaN</code>; caso contrário, devolve <code>false</code>.


## Examples

### Example #1 
Verificar se 0 dividido por 0 é NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Verificar se 1 dividido por 0 é NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
