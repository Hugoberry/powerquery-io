---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Vráti uzavretú verziu daného typu záznamu (alebo rovnaký typ, ak už je uzavretý).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Vráti uzavretú verziu daného `záznamu` `type` (alebo rovnaký typ, ak už je uzavretý).


## Examples

### Example #1
Vytvorte uzavretú verziu `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
