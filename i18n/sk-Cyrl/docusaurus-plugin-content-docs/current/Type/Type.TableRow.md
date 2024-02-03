---
title: Type.TableRow
---

# Type.TableRow


## Description

Vráti typ riadka typu tabuľky.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Vráti typ riadka zadaného typu tabuľky. Výsledok bude vždy typ záznamu.


## Examples

### Example #1 
Vráti informácie o type riadka pre jednoduchú tabuľku.
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
