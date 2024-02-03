---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Retourneert de mogelijk lege lijst met sleutels voor het opgegeven tabeltype.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Retourneert de mogelijk lege lijst met sleutels voor het opgegeven tabeltype.<br />    <br />    Elke sleutel wordt gedefinieerd met behulp van een record in de volgende vorm:    <ul>      <li>        <code>Columns</code>: een lijst met de namen van kolommen waarmee de sleutel      </li>      <li>        <code>Primary</code>: <code>true</code> als de sleutel de primaire sleutel van de tabel is; anders <code>false</code>      </li>    </ul>    


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
