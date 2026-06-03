---
title: Type.TableRow
---

# Type.TableRow


Gibt den Zeilentyp des Tabellentyps zurück.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Remarks

Gibt den Zeilentyp des angegebenen Tabellentyps zurück. Das Ergebnis ist immer ein Datensatztyp.


## Examples

### Example #1
Gibt die Zeilentypinformationen für eine einfache Tabelle zurück.
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
