---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Returnerer den eventuelt tomme liste over nøgler for den angivne tabeltype.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Returnerer den eventuelt tomme liste over nøgler for den angivne tabeltype.<br />    <br />    Hver nøgle defineres ved hjælp af en post i følgende format:    <ul>      <li>        <code>Columns</code>: en liste over de kolonnenavne, der definerer nøglen      </li>      <li>        <code>Primary</code>: <code>true</code> hvis nøglen er tabellens primære nøgle; ellers <code>falsk</code>      </li>    </ul>    


## Examples

### Example #1 
Returner nøgleoplysningerne vedrørende en tabeltype.
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
