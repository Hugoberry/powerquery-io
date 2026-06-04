---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Vrne zaprto različico dane vrste zapisa (ali isto vrsto, če je ta že zaprta).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Vrne zaprto različico `zapisa` `type` (ali isto vrsto, če je ta že zaprta).


## Examples

### Example #1
Ustvarite zaprto različico `vrsta [ A = število,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
