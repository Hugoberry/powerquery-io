---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Palauttaa uuden taulukkotyypin, jonka kaikki avaimet on korvattu määritetyllä avainluettelolla.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Palauttaa uuden taulukkotyypin, jonka kaikki avaimet on korvattu määritetyllä avainluettelolla.<br />    <br />    Jokainen avain määritetään seuraavan lomakkeen tietueen avulla:    <ul>      <li>        <code>Columns</code>: avaimen määrittävien sarakkeiden nimien luettelo      </li>      <li>        <code>Primary</code>: <code>true</code>, jos avain on taulukon perusavain; muussa tapauksessa <code>false</code>      </li>    </ul>    Määritetty avainluettelo vahvistetaan sen varmistamiseksi, että enintään yksi perusavain on määritetty ja että kaikki avainsarakkeiden nimet ovat taulukkotyypissä.    


## Examples

### Example #1 
Korvaa taulukkotyypin avaintiedot.
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
Tyhjennä taulukkotyypille aiemmin määritetyt avaintiedot.
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
