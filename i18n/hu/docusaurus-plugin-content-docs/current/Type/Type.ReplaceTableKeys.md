---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Egy új táblatípust ad vissza, amelyben az összes kulcs le lett cserélve a megadott listán szereplő kulcsokra.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Egy új táblatípust ad vissza, amelyben az összes kulcs le lett cserélve a megadott listán szereplő kulcsokra.<br />    <br />    Minden kulcs egy rekorddal van definiálva a következő formában:    <ul>      <li>        <code>Columns</code>: a kulcsot definiáló oszlopnevek listája      </li>      <li>        <code>Primary</code>: <code>true</code>, ha a kulcs a tábla elsődleges kulcsa; egyébként <code>false</code>      </li>    </ul>    A rendszer ellenőrzi a megadott listán szereplő kulcsokat annak biztosításához, hogy ne legyen egynél több elsődleges kulcs definiálva, és hogy az összes kulcsoszlopnév szerepeljen a táblatípusban.    


## Examples

### Example #1 
Táblatípus kulcsadatainak lecserélése.
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
A táblatípusban korábban definiált kulcsadatok törlése.
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
