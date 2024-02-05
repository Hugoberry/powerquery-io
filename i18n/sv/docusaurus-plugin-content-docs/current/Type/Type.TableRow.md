---
title: Type.TableRow
---

# Type.TableRow


## Description

Skickar tillbaka radtypen i tabelltypen.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Skickar tillbaka radtypen för den angivna tabelltypen. Resultatet är alltid en posttyp.


## Examples

### Example #1 
Skicka tillbaka information om radtyp för en enkel tabell.
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
