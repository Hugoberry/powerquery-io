---
title: Type.OpenRecord
---

# Type.OpenRecord


Vráti otvorenú verziu daného typu záznamu (alebo rovnaký typ, ak už je otvorený).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Vráti otvorenú verziu daného `záznamu` `type` (alebo rovnaký typ, ak už je otvorený).


## Examples

### Example #1
Vytvor otvorenú verziu `typu [ A = číslo]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
