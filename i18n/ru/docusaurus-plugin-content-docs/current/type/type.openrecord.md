---
title: Type.OpenRecord
---

# Type.OpenRecord


Возвращает открытую версию данного типа записи (или такой же тип, если запись уже является открытой).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Возвращает открытую версию данной записи `record` `type` (или такой же тип, если запись уже является открытой).


## Examples

### Example #1
Создать открытую версию `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
