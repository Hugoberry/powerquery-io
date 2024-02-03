---
title: Type.TableRow
---

# Type.TableRow


## Description

Tiek atgriezts rindas tips tabulas tipā.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Atgriež norādītā tabulas tipa rindas tipu. Rezultāts vienmēr būs ieraksta tips.


## Examples

### Example #1 
Tiek atrakstīta rindas tipa informācija vienkāršai tabulai.
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
