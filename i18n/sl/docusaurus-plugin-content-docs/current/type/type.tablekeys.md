---
title: Type.TableKeys
---

# Type.TableKeys


Vrne seznam ključev za dano vrsto tabele, ki je morda prazen.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Vrne seznam ključev za dano vrsto tabele, ki je morda prazen.  
  
Vsak ključ je določen z zapisom v tej obliki:

-   `Stolpci`: seznam imen stolpcev, ki določajo ključ
-   `Primarno`: `true`, če je ključ primarni ključ tabele; sicer `false`


## Examples

### Example #1
Vrnite informacije o ključu za vrsto tabele.
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
