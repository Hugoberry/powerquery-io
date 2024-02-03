---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Angiver, om værdien er NaN (ikke et tal).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Angiver, om værdien er NaN (ikke et tal). Returnerer <code>true</code>, hvis <code>number</code> er identisk med <code>Number.IsNaN</code>. Ellers returneres <code>false</code>.


## Examples

### Example #1 
Kontrollér, om 0 divideret med 0 er NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollér, om 1 divideret med 0 er NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
