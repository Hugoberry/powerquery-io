---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Retourne un nouveau type de table avec toutes les clés remplacées par la liste spécifiée de clés.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Renvoie un nouveau type de table avec toutes les clés remplacées par la liste de clés spécifiée.<br />    <br />    Chaque clé est définie à l'aide d'un enregistrement sous la forme suivante :    <ul>      <li>        <code>Colonnes</code> : une liste des noms de colonnes qui définissent la clé      </li>      <li>        <code>Primary</code> : <code>true</code> si la clé est la clé primaire de la table ; sinon, <code>faux</code>      </li>    </ul>    La liste de clés spécifiée est validée pour garantir qu'au maximum une clé primaire est définie et que tous les noms de colonnes de clés existent sur le type de table.    


## Examples

### Example #1 
Remplacez les informations clés sur un type de table.
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
Efface les informations clés précédemment définies sur un type de table.
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
