---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Vrátí informace o tom, jestli je záznam otevřeného typu.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Vrátí logickou hodnotu (`logical`) označující, jestli je záznam `type` otevřený.


## Examples

### Example #1
Určí, jestli je záznam `type [ A = number, ...]` otevřený.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
