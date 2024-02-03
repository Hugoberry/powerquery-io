---
title: Type.TableRow
---

# Type.TableRow


## Description

Returnează tipul de linie pentru tipul de tabel.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Returnează tipul de linie pentru tipul de tabel specificat. Rezultatul va fi întotdeauna un tip de înregistrare.


## Examples

### Example #1 
Returnează informațiile despre tipul de linie pentru un tabel simplu.
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
