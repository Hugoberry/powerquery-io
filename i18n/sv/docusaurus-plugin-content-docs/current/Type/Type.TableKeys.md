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

Returnerar den eventuellt tomma listan med nycklar för den angivna tabelltypen.<br />    <br />    Varje nyckel definieras med hjälp av en post i följande format:    <ul>      <li>        <code>Columns</code>: en lista över kolumnnamnen som definierar nyckeln      </li>      <li>        <code>Primary</code>: <code>true</code> om nyckeln är tabellens primärnyckel; annars <code>false</code>      </li>    </ul>    


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
