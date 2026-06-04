---
title: Type.TableKeys
---

# Type.TableKeys


Vráti pravdepodobne prázdny zoznam kľúčov pre daný typ tabuľky.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Vráti prípadne prázdny zoznam kľúčov pre daný typ tabuľky.  
  
Každý kľúč je definovaný pomocou záznamu v nasledujúcom tvare:

-   `Sĺpce`: zoznam názvov stĺpcov, ktoré definujú kľúč
-   `Hlavné`: `true` ak je kľúč primárnym kľúčom tabuľky; v opačnom prípade, `false`


## Examples

### Example #1
Vrátiť informácie o kľúči pre typ tabuľky.
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
