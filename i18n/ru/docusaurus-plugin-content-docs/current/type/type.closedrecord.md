---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Возвращает закрытую версию данного типа записи (или такой же тип, если он уже закрыт).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Возвращает закрытую версию данной записи `record` `type` (или тот же тип, если он уже закрыт).


## Examples

### Example #1
Создать закрытую версию `type [ A = number,…]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
