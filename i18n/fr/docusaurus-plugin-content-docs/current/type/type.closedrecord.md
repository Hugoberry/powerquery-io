---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Retourne une version fermée du type d'enregistrement donné (ou le même type, s'il est déjà fermé).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Retourne une version fermée du `record` `type` donné (ou le même type, s'il est déjà fermé).


## Examples

### Example #1
Créez une version fermée de `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
