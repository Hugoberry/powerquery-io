---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Gibt die möglicherweise leere Liste mit Schlüsseln für den angegebenen Tabellentyp zurück.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Gibt die möglicherweise leere Liste mit Schlüsseln für den angegebenen Tabellentyp zurück.<br />    <br />    Jeder Schlüssel wird mithilfe eines Datensatzes in der folgenden Form definiert:    <ul>      <li>        <code>Spalten</code>: eine Liste der Spaltennamen, die den Schlüssel definieren.      </li>      <li>        <code>Primär</code>: <code>true</code>, wenn der Schlüssel der Primärschlüssel der Tabelle ist; andernfalls <code>false</code>      </li>    </ul>    


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
