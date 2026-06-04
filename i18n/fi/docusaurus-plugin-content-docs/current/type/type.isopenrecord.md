---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Palauttaa, onko tietuetyyppi avoin.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Palauttaa kohteen `logical`, joka ilmaisee, onko tietue `type` avoin.


## Examples

### Example #1
Selvitä, onko tietue `type [ A = luku, ...]` auki.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
