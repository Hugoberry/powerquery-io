---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Indica se il valore è NaN (non un numero).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Indica se il valore è NaN (non un numero). Restituisce <code>true</code> se <code>number</code> è equivalente a <code>Number.IsNaN</code>, in caso contrario <code>false</code>.


## Examples

### Example #1 
Verificare se 0 diviso per 0 è NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Verificare se 1 diviso per 0 è NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
