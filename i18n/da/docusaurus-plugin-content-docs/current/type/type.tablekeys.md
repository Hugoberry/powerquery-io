---
title: Type.TableKeys
---

# Type.TableKeys


Returnerer den eventuelt tomme liste over nøgler for den angivne tabeltype.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Returnerer den eventuelt tomme liste over nøgler for den angivne tabeltype.  
  
Hver nøgle defineres ved hjælp af en post i følgende format:

-   `Columns`: en liste over de kolonnenavne, der definerer nøglen
-   `Primary`: `true` hvis nøglen er tabellens primære nøgle; ellers `falsk`


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
