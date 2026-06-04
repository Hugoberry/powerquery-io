---
title: Type.OpenRecord
---

# Type.OpenRecord


Atgriež sniegtā ieraksta tipa atvērtu versiju (vai to pašu tipu, ja tā jau ir atvērta).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Atgriež sniegtā `record` `type` atvērtu versiju (vai to pašu tipu, ja tā jau ir atvērta).


## Examples

### Example #1
Izveidojiet `type [ A = number]` atvērtu versiju.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
