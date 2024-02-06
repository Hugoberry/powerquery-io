---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Gibt einen neuen Tabellentyp zurück, in dem alle Schlüssel durch die Schlüssel aus der angegebenen Liste ersetzt wurden.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Gibt einen neuen Tabellentyp zurück, in dem alle Schlüssel durch die Schlüssel aus der angegebenen Liste ersetzt wurden.<br />    <br />    Jeder Schlüssel wird mithilfe eines Datensatzes in der folgenden Form definiert:    <ul>      <li>        <code>Spalten</code>: eine Liste der Spaltennamen, die den Schlüssel definieren.      </li>      <li>        <code>Primär</code>: <code>true</code>, wenn der Schlüssel der Primärschlüssel der Tabelle ist; andernfalls <code>false</code>      </li>    </ul>    Die angegebene Schlüsselliste wird überprüft, um sicherzustellen, dass nicht mehr als ein Primärschlüssel definiert ist und dass alle Schlüsselspaltennamen für den Tabellentyp vorhanden sind.    


## Examples

### Example #1 
Ersetzen Sie die Schlüsselinformationen für einen Tabellentyp.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
Löschen Sie die Schlüsselinformationen, die zuvor für einen Tabellentyp definiert wurden.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
