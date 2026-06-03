---
title: Type.OpenRecord
---

# Type.OpenRecord


Returnerer en åben version af den angivne posttype (eller samme type, hvis den allerede er åben).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Returnerer en åben version af den angivne `record` `type` (eller den samme type, hvis den allerede er åben).


## Examples

### Example #1
Opret en åben version af `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
