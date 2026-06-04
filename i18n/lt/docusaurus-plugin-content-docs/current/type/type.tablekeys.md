---
title: Type.TableKeys
---

# Type.TableKeys


Pateikiamas galimai tuščias nurodyto lentelės tipo raktų sąrašas.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Pateikiamas galimai tuščias nurodyto lentelės tipo raktų sąrašas.  
  
Kiekvienas raktas apibrėžiamas naudojant šios formos įrašą:

-   `Columns`: stulpelių pavadinimų, kurie apibrėžia raktą , sąrašas
-   `Primary`: `true`, jei raktas yra lentelės pirminis raktas; kitu atveju `false`


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
