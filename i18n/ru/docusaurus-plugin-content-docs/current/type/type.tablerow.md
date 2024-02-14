---
title: Type.TableRow
---

# Type.TableRow


Возвращает тип строки для типа таблицы.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Remarks

Возвращает тип строки для указанного типа таблицы. Результатом всегда будет тип записи.


## Examples

### Example #1 
Возврат сведений о типе строки для простой таблицы.
```powerquery
let
    tableRowType = Type.TableRow(Value.Type(#table({"Column1"}, {})))
in
    Type.RecordFields(tableRowType)
```

Result: 
```powerquery
[Column1 = [Type = type any, Optional = false]]
```




## Category
Type
