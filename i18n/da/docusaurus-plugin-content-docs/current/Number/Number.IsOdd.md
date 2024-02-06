---
title: Number.IsOdd
---

# Number.IsOdd


Angiver, om værdien er et ulige tal.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Angiver, om værdien er et ulige tal. Returnerer <code>true</code>, hvis <code>number</code> er et ulige tal. Ellers returneres <code>false</code>.


## Examples

### Example #1 
Kontrollér, om 625 er et ulige tal.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollér, om 82 er et ulige tal.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
