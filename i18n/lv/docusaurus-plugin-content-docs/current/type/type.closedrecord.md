---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Atgriež sniegtā ieraksta tipa slēgtu versiju (vai to pašu tipu, ja tas jau ir noslēgts).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Atgriež sniegtā `record` `type` slēgtu versiju (vai to pašu tipu, ja tas jau ir noslēgts).


## Examples

### Example #1
Izveidojiet `type [ A = number,…]` slēgtu versiju.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
