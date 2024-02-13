---
title: Number.IsEven
---

# Number.IsEven


Angiver, om værdien er et lige tal.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Angiver, om værdien, <code>number</code>, er et lige tal, ved at returnere <code>true</code>, hvis det er et lige tal. Ellers returneres <code>false</code>.


## Examples

### Example #1 
Kontrollér, om 625 er et lige tal.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
Kontrollér, om 82 er et lige tal.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
