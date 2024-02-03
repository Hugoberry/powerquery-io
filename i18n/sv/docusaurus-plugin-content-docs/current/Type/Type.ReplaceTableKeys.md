---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Returnerar en ny tabelltyp där alla nycklar ersatts med den angivna listan med nycklar.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Returnerar en ny tabelltyp med alla nycklar ersatta med den angivna listan med nycklar.<br />    <br />    Varje nyckel definieras med hjälp av en post i följande format:    <ul>      <li>        <code>Columns</code>: en lista över kolumnnamnen som definierar nyckeln      </li>      <li>        <code>Primary</code>: <code>true</code> om nyckeln är tabellens primärnyckel; annars <code>false</code>      </li>    </ul>    Den angivna listan över nycklar verifieras för att säkerställa att högst en primärnyckel har definierats och att alla nyckelkolumnnamn finns i tabelltypen.    


## Examples

### Example #1 
Ersätt nyckelinformationen för en tabelltyp.
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
Rensa nyckelinformationen som tidigare definierats för en tabelltyp.
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
