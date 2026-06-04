---
title: Type.TableKeys
---

# Type.TableKeys


Palauttaa mahdollisesti tyhjän avainluettelon annetulle taulukkotyypille.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Palauttaa mahdollisesti tyhjän avainluettelon annetulle taulukkotyypille.  
  
Jokainen avain määritetään seuraavan lomakkeen tietueen avulla:

-   `Columns`: avaimen määrittävien sarakkeiden nimien luettelo
-   `Primary`: `true`, jos avain on taulukon perusavain; muussa tapauksessa `false`


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
