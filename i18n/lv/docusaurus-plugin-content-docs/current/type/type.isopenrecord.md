---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Atgriež, vai ieraksta tips ir atvērts.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Atgriež `logical`, kas norāda, vai ieraksts `type` ir atvērts.


## Examples

### Example #1
Nosakiet, vai ieraksts `type [ A = number, ...]` ir atvērts.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
