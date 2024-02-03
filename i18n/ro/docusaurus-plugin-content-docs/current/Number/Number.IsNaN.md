---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Indică dacă valoarea este NaN (nu este număr).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Indică dacă valoarea este NaN (nu este număr). Returnează <code>true</code> dacă <code>number</code> este echivalent cu <code>Number.IsNaN</code>; în caz contrar, returnează <code>false</code>.


## Examples

### Example #1 
Verificaţi dacă 0 împărţit la 0 este NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Verificaţi dacă 1 împărţit la 0 este NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
