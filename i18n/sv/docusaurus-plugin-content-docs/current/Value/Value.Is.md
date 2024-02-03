---
title: Value.Is
---

# Value.Is


## Description

Anger om ett värde är kompatibelt med den angivna typen.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Anger om ett värde är kompatibelt med den angivna typen. Detta motsvarar operatorn "är" i M, med undantaget att den kan acceptera referenser för identifieringstyp som Number.Type.


## Examples

### Example #1 
Jämför två sätt att avgöra om ett nummer är kompatibelt med typen nummer.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
