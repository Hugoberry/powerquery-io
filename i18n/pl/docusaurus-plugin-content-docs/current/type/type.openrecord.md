---
title: Type.OpenRecord
---

# Type.OpenRecord


Zwraca otwartą wersję podanego typu rekordu (lub ten sam typ, jeśli jest już otwarty).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Zwraca otwartą wersję podanego elementu `record` `type` (lub ten sam typ, jeśli jest już otwarty).


## Examples

### Example #1
Utwórz otwartą wersję elementu `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
