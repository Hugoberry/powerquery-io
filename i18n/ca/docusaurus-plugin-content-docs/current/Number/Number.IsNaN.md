---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Indica si el valor és NaN (no és un nombre).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Indica si el valor és NaN (no és un nombre). Retorna <code>true</code> si <code>number</code> és equivalent a <code>Number.IsNaN</code> o <code>false</code> en cas contrari.


## Examples

### Example #1 
Comprova si 0 dividit per 0 és NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Comprova si 1 dividit per 0 és NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
