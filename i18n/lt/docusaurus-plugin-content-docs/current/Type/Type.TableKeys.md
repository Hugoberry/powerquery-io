---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Pateikiamas galimai tuščias nurodyto lentelės tipo raktų sąrašas.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Pateikiamas galimai tuščias nurodyto lentelės tipo raktų sąrašas.<br />    <br />    Kiekvienas raktas apibrėžiamas naudojant šios formos įrašą:    <ul>      <li>        <code>Columns</code>: stulpelių pavadinimų, kurie apibrėžia raktą, sąrašas
      </li>      <li>        <code>Primary</code>: <code>true</code>, jei raktas yra lentelės pirminis raktas; kitu atveju <code>false</code>      </li>    </ul>    


## Examples

### Example #1 
Pateikia lentelės tipo raktų informacija.
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
