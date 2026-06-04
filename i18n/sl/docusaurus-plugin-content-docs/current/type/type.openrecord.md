---
title: Type.OpenRecord
---

# Type.OpenRecord


Vrne odprto različico dane vrste zapisa (ali isto vrsto, če je ta že odprta).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Vrne odprto različico `zapisa` `type` (ali isto vrsto, če je ta že odprta).


## Examples

### Example #1
Ustvarite odprto različico `vrste [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
