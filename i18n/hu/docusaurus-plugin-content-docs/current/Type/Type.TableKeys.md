---
title: Type.TableKeys
---

# Type.TableKeys


## Description

A megadott táblatípushoz tartozó kulcsok esetlegesen üres listáját adja vissza.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Az adott táblatípushoz tartozó kulcsok esetlegesen üres listáját adja vissza.<br />    <br />    Minden kulcs egy rekorddal van definiálva a következő formában:    <ul>      <li>        <code>Columns</code>: a kulcsot definiáló oszlopnevek listája      </li>      <li>        <code>Primary</code>: <code>true</code>, ha a kulcs a tábla elsődleges kulcsa; egyébként <code>false</code>      </li>    </ul>    


## Examples

### Example #1 
Táblatípus kulcsadatainak visszaadása.
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
