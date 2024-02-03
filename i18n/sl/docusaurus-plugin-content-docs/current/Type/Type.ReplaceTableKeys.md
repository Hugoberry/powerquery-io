---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Vrne novo vrsto tabele, v kateri so vsi ključi zamenjani z navedenim seznamom ključev.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Vrne novo vrsto tabele, v kateri so vsi ključi zamenjani z navedenim seznamom ključev.<br />    <br />    Vsak ključ je določen z zapisom v tej obliki:    <ul>      <li>        <code>Stolpci</code>: seznam imen stolpcev, ki določajo ključ      </li>      <li>        <code>Primarno</code>: <code>true</code>, če je ključ primarni ključ tabele; sicer <code>false</code>      </li>    </ul>    Navedeni seznam ključev je preverjen. Na ta način je lahko določen le en primarni ključ in vsa imena stolpcev ključev so navedena v vrsti tabele.    


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
