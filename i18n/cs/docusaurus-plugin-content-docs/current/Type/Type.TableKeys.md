---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Vrátí seznam klíčů pro daný typ tabulky, který může být prázdný.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Vrátí pravděpodobně prázdný seznam klíčů pro daný typ tabulky.<br />    <br />    Každý klíč je definován pomocí záznamu v následujícím formátu:    <ul>      <li>        <code>Sloupce</code>: seznam názvů sloupců, které definují klíč      </li>      <li>        <code>Primární</code>: <code>true</code> pokud je klíč primárním klíčem tabulky; jinak <code>false</code>      </li>    </ul>    


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
