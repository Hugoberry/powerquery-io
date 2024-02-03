---
title: Type.TableRow
---

# Type.TableRow


## Description

Restituisce il tipo di riga del tipo di tabella.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Restituisce il tipo di riga del tipo di tabella specificato. Il risultato sarà sempre un tipo di record.


## Examples

### Example #1 
Restituisce le informazioni sul tipo di riga per una tabella semplice.
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
