---
title: Type.TableRow
---

# Type.TableRow


## Description

Повертає тип рядка типу таблиці.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Повертає тип рядка вказаного типу таблиці. Результат завжди буде типом запису.


## Examples

### Example #1 
Повернення відомостей про тип рядка для простої таблиці.
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
