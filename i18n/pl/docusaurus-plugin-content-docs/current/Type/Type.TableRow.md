---
title: Type.TableRow
---

# Type.TableRow


## Description

Zwraca typ wiersza dla typu tabeli typu.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Zwraca typ wiersza dla określonego typu tabeli. Wynik będzie zawsze typem rekordu.


## Examples

### Example #1 
Zwraca informacje o typie wiersza dla prostej tabeli.
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
