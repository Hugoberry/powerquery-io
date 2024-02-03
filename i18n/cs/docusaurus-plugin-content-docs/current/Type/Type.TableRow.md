---
title: Type.TableRow
---

# Type.TableRow


## Description

Vrátí typ řádku typu tabulky.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Vrátí typ řádku zadaného typu tabulky. Výsledkem bude vždy typ záznamu.


## Examples

### Example #1 
Vrátí informace o typu řádku pro jednoduchou tabulku.
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
