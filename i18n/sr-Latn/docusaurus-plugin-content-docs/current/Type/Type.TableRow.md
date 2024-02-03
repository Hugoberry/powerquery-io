---
title: Type.TableRow
---

# Type.TableRow


## Description

Vraća tip reda tipa tabele.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Vraća tip reda navedenog tipa tabele. Rezultat će uvek biti tip zapisa.


## Examples

### Example #1 
Vraćanje informacija o tipu reda za jednostavnu tabelu.
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
