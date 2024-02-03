---
title: Type.TableRow
---

# Type.TableRow


## Description

Returnerer rækketypen for tabeltypen.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Returnerer rækketypen for den angivne tabeltype. Resultatet vil altid være en posttype.


## Examples

### Example #1 
Returner oplysninger om rækketype for en simpel tabel.
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
