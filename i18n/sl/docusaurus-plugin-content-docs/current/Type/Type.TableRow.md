---
title: Type.TableRow
---

# Type.TableRow


## Description

Vrne vrsto vrstice vrste tabele.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Vrne vrsto vrstice določene vrste tabele. Rezultat bo vedno vrsta zapisa.


## Examples

### Example #1 
Vrne podatke vrste vrstice za preprosto tabelo.
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
