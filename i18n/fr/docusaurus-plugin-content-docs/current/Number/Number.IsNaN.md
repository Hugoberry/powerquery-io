---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Indique si la valeur est NaN (n&#39;est pas un nombre).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Indique si la valeur est NaN (n'est pas un nombre). Retourne <code>true</code> si <code>number</code> est équivalent à <code>Number.IsNaN</code>, sinon <code>false</code>.


## Examples

### Example #1 
Vérifie si 0 divisé par 0 est NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Vérifie si 1 divisé par 0 est NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
