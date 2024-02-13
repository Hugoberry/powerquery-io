---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Retourneert een nieuw tabeltype met alle sleutels die door de opgeven lijst met sleutels worden vervangen.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Retourneert een nieuw tabeltype met alle sleutels die zijn vervangen door de opgegeven lijst met sleutels.<br />    <br />    Elke sleutel wordt gedefinieerd met behulp van een record in de volgende vorm:    <ul>      <li>        <code>Columns</code>: een lijst met de namen van kolommen waarmee de sleutel      </li>      <li>        <code>Primary</code>: <code>true</code> als de sleutel de primaire sleutel van de tabel is; anders <code>false</code>      </li>    </ul>    De opgegeven lijst met sleutels wordt gevalideerd om ervoor te zorgen dat er niet meer dan één primaire sleutel is gedefinieerd en dat alle namen van sleutelkolommen bestaan in het tabeltype.    


## Examples

### Example #1 
Vervang de sleutelgegevens voor een tabeltype.
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
Wis de sleutelgegevens die eerder zijn gedefinieerd voor een tabeltype.
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
