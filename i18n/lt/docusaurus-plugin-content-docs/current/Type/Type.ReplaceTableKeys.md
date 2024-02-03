---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Pateikiamas naujas lentelės tipas su visais raktais, pakeistais nurodytu raktų sąrašu.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Pateikiamas naujas lentelės tipas su visais raktais, pakeistais nurodytu raktų sąrašu.<br />    <br />    Kiekvienas raktas apibrėžiamas naudojant šios formos įrašą:    <ul>      <li>        <code>Columns</code>: stulpelių pavadinimų, kurie apibrėžia raktą, sąrašas
      </li>      <li>        <code>Primary</code>: <code>true</code>, jei raktas yra lentelės pirminis raktas; kitu atveju <code>false</code>      </li>    </ul>    Nurodytas raktų sąrašas tikrinamas siekiant užtikrinti, kad būtų apibrėžtas ne daugiau nei vienas pirminis raktas ir kad lentelės tipe būtų visi raktų stulpelių pavadinimai.    


## Examples

### Example #1 
Pakeičia lentelės tipo raktų informaciją.
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
Išvalo anksčiau lentelės tipe apibrėžtą pagrindinę informaciją.
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
