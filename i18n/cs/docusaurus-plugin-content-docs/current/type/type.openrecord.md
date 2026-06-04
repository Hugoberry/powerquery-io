---
title: Type.OpenRecord
---

# Type.OpenRecord


Vrátí otevřenou verzi daného typu záznamu (nebo stejného typu, pokud už je otevřený).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Vrátí otevřenou verzi daného záznamu (`record`) `type` (nebo stejného typu, pokud už je otevřený).


## Examples

### Example #1
Vytvoří otevřenou verzi pro `type [ A = number,…]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
