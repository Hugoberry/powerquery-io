---
title: Logical.ToText
---

# Logical.ToText


Vraća tekstualnu vrednost „true“ ili „false“ na osnovu logičke vrednosti.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Kreira tekstualnu vrednost od logičke vrednosti `logicalValue`, bilo `true` ili `false`. Ako `logicalValue` nije logička vrednost, prijavljuje se greška.


## Examples

### Example #1
Kreiranje tekstualne vrednosti od logičke `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
