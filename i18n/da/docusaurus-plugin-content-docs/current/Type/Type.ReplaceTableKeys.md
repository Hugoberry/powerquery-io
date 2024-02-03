---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Returnerer en ny tabeltype, hvor alle nøgler er erstattet af den angivne liste over nøgler.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Returnerer en ny tabeltype, hvor alle nøgler er erstattet af den angivne liste over nøgler.<br />    <br />    Hver nøgle defineres ved hjælp af en post i følgende format:    <ul>      <li>        <code>Columns</code>: en liste over de kolonnenavne, der definerer nøglen      </li>      <li>        <code>Primary</code>: <code>true</code> hvis nøglen er tabellens primære nøgle; ellers <code>falsk</code>      </li>    </ul>    Den angivne liste over nøgler valideres for at sikre, at der ikke er defineret mere end én primær nøgle, og at alle nøglekolonnenavne findes i tabeltypen.    


## Examples

### Example #1 
Erstat nøgleoplysningerne vedrørende en tabeltype.
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
Ryd de nøgleoplysninger, der tidligere er defineret på en tabeltype.
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
