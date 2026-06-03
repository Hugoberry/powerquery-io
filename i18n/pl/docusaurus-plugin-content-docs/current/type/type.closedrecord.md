---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Zwraca zamkniętą wersję podanego typu rekordu (lub ten sam typ, jeśli jest już zamknięty).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Zwraca zamkniętą wersję podanego elementu `record` `type` (lub ten sam typ, jeśli jest już zamknięty).


## Examples

### Example #1
Utwórz zamkniętą wersję elementu `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
