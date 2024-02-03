---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Palauttaa mahdollisesti tyhjän avainluettelon annetulle taulukkotyypille.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Palauttaa mahdollisesti tyhjän avainluettelon annetulle taulukkotyypille.<br />    <br />    Jokainen avain määritetään seuraavan lomakkeen tietueen avulla:    <ul>      <li>        <code>Columns</code>: avaimen määrittävien sarakkeiden nimien luettelo      </li>      <li>        <code>Primary</code>: <code>true</code>, jos avain on taulukon perusavain; muussa tapauksessa <code>false</code>      </li>    </ul>    


## Examples

### Example #1 
Palauta taulukkotyypin avaintiedot.
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
