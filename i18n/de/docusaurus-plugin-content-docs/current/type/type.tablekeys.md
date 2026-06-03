---
title: Type.TableKeys
---

# Type.TableKeys


Gibt die möglicherweise leere Liste mit Schlüsseln für den angegebenen Tabellentyp zurück.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Gibt die möglicherweise leere Liste mit Schlüsseln für den angegebenen Tabellentyp zurück.  
  
Jeder Schlüssel wird mithilfe eines Datensatzes in der folgenden Form definiert:

-   `Spalten`: eine Liste der Spaltennamen, die den Schlüssel definieren.
-   `Primär`: `true`, wenn der Schlüssel der Primärschlüssel der Tabelle ist; andernfalls `false`


## Examples

### Example #1
Gibt die Schlüsselinformationen für einen Tabellentyp zurück.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
