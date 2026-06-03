---
title: Type.TableKeys
---

# Type.TableKeys


Returnerar den eventuellt tomma listan med nycklar för den angivna tabelltypen.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Returnerar den eventuellt tomma listan med nycklar för den angivna tabelltypen.  
  
Varje nyckel definieras med hjälp av en post i följande format:

-   `Columns`: en lista över kolumnnamnen som definierar nyckeln
-   `Primary`: `true` om nyckeln är tabellens primärnyckel; annars `false`


## Examples

### Example #1
Returnera nyckelinformationen för en tabelltyp.
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
