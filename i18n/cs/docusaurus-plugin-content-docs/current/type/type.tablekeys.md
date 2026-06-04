---
title: Type.TableKeys
---

# Type.TableKeys


Vrátí seznam klíčů pro daný typ tabulky, který může být prázdný.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Vrátí pravděpodobně prázdný seznam klíčů pro daný typ tabulky.  
  
Každý klíč je definován pomocí záznamu v následujícím formátu:

-   `Sloupce`: seznam názvů sloupců, které definují klíč
-   `Primární`: `true` pokud je klíč primárním klíčem tabulky; jinak `false`


## Examples

### Example #1
Vrátí informace o klíči pro typ tabulky.
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
