---
title: Type.TableKeys
---

# Type.TableKeys


Retourne la liste éventuellement vide de clés pour le type de table spécifié.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Renvoie la liste de clés éventuellement vide pour le type de table donné.<br />    <br />    Chaque clé est définie à l'aide d'un enregistrement sous la forme suivante :    <ul>      <li>        <code>Colonnes</code> : une liste des noms de colonnes qui définissent la clé      </li>      <li>        <code>Primary</code> : <code>true</code> si la clé est la clé primaire de la table ; sinon, <code>faux</code>      </li>    </ul>    


## Examples

### Example #1 
Renvoie les informations clés pour un type de table.
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
