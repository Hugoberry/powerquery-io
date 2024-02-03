---
title: Type.TableRow
---

# Type.TableRow


## Description

Pateikiamas lentelės tipo eilutės tipas.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Pateikiamas nurodyto lentelės tipo eilutės tipas. Rezultatas visada bus įrašo tipas.


## Examples

### Example #1 
Pateikite paprastos lentelės eilutės tipo informaciją.
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
