---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Vráti nový typ tabuľky, pričom všetky kľúče sa nahradia zadaným zoznamom kľúčov.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Vráti nový typ tabuľky so všetkými kľúčmi nahradenými zadaným zoznamom kľúčov.  
  
Každý kľúč je definovaný pomocou záznamu v nasledujúcom tvare:

-   `Sĺpce`: zoznam názvov stĺpcov, ktoré definujú kľúč
-   `Hlavné`: `true` ak je kľúč primárnym kľúčom tabuľky; v opačnom prípade, `false`

Zadaný zoznam kľúčov sa overí, aby sa zabezpečilo, že nie je definovaný viac ako jeden primárny kľúč a že všetky názvy stĺpcov kľúčov existujú v danom type tabuľky.


## Examples

### Example #1
Nahradiť kľúčové informácie o type tabuľky.
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
Vymazať informácie o kľúči, ktoré boli predtým definované pre typ tabuľky.
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
