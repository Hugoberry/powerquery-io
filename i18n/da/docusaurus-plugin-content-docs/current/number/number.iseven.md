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

Angiver, om værdien, `number`, er et lige tal, ved at returnere `true`, hvis det er et lige tal. Ellers returneres `false`.


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
