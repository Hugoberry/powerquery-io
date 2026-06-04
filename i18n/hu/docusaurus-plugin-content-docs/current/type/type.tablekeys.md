---
title: Type.TableKeys
---

# Type.TableKeys


A megadott táblatípushoz tartozó kulcsok esetlegesen üres listáját adja vissza.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Az adott táblatípushoz tartozó kulcsok esetlegesen üres listáját adja vissza.  
  
Minden kulcs egy rekorddal van definiálva a következő formában:

-   `Columns`: a kulcsot definiáló oszlopnevek listája
-   `Primary`: `true`, ha a kulcs a tábla elsődleges kulcsa; egyébként `false`


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
