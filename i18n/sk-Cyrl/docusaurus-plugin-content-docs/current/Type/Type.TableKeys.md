---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Vráti pravdepodobne prázdny zoznam kľúčov pre daný typ tabuľky.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Vráti prípadne prázdny zoznam kľúčov pre daný typ tabuľky.<br />    <br />    Každý kľúč je definovaný pomocou záznamu v nasledujúcom tvare:    <ul>      <li>        <code>Sĺpce</code>: zoznam názvov stĺpcov, ktoré definujú kľúč      </li>      <li>        <code>Hlavné</code>: <code>true</code> ak je kľúč primárnym kľúčom tabuľky; v opačnom prípade, <code>false</code>      </li>    </ul>    


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
