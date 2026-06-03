---
title: Type.TableKeys
---

# Type.TableKeys


Retourneert de mogelijk lege lijst met sleutels voor het opgegeven tabeltype.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Retourneert de mogelijk lege lijst met sleutels voor het opgegeven tabeltype.  
  
Elke sleutel wordt gedefinieerd met behulp van een record in de volgende vorm:

-   `Columns`: een lijst met de namen van kolommen waarmee de sleutel
-   `Primary`: `true` als de sleutel de primaire sleutel van de tabel is; anders `false`


## Examples

### Example #1
Retourneer de sleutelgegevens voor een tabeltype.
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
