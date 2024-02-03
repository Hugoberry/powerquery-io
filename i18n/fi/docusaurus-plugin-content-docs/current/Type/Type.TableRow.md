---
title: Type.TableRow
---

# Type.TableRow


## Description

Palauttaa taulukkotyypin rivityypin.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Palauttaa määritetyn taulukkotyypin rivityypin. Tulos on aina tietuetyyppi.


## Examples

### Example #1 
Palauttaa yksinkertaisen taulukon rivityyppitiedot.
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
