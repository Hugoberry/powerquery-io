---
title: Type.TableRow
---

# Type.TableRow


## Description

A táblatípus sortípusát adja vissza.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

A megadott táblatípus sortípusát adja vissza. Az eredmény mindig rekord típusú lesz.


## Examples

### Example #1 
Egy egyszerű tábla sortípus adatainak visszaadása.
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
