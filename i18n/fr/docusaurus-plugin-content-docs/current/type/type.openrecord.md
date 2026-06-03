---
title: Type.OpenRecord
---

# Type.OpenRecord


Retourne une version ouverte du type d'enregistrement donné (ou le même type, s'il est déjà ouvert).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Retourne une version ouverte du `record` `type` donné (ou le même type, s'il est déjà ouvert).


## Examples

### Example #1
Créez une version ouverte de `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
