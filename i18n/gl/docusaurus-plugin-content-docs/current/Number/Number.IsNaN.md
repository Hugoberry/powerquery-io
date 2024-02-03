---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Indica se o valor é NaN (non numérico).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Indica se o valor é NaN (non numérico). Devolve <code>true</code> se <code>number</code> é equivalente a <code>Number.IsNaN</code>, se non, <code>false</code>.


## Examples

### Example #1 
Comprobar se 0 dividido entre 0 é NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Comprobar se 1 dividido entre 0 é NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
