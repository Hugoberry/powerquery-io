---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Vrne novo vrsto tabele, v kateri so vsi ključi zamenjani z navedenim seznamom ključev.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Vrne novo vrsto tabele, v kateri so vsi ključi zamenjani z navedenim seznamom ključev.  
  
Vsak ključ je določen z zapisom v tej obliki:

-   `Stolpci`: seznam imen stolpcev, ki določajo ključ
-   `Primarno`: `true`, če je ključ primarni ključ tabele; sicer `false`

Navedeni seznam ključev je preverjen. Na ta način je lahko določen le en primarni ključ in vsa imena stolpcev ključev so navedena v vrsti tabele.


## Examples

### Example #1
Zamenjajte informacije o ključu v vrsti tabele.
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
Počistite informacije o ključu, ki so bili prej določene v vrsti tabele.
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
