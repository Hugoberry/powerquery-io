---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Zwraca listę kluczy, która może być pusta, tabeli danego typu.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Zwraca być może pustą listę kluczy dla danego typu tabeli.<br />    <br />    Każdy klucz jest definiowany przy użyciu rekordu w następującej postaci:    <ul>      <li>        <code>Kolumny</code>: lista nazw kolumn, która definiuje klucz      </li>      <li>        <code>Podstawowy</code>: <code>true</code>, jeśli klucz jest kluczem podstawowym; w przeciwnym razie <code>false</code>      </li>    </ul>    


## Examples

### Example #1 
Zwróć informacje o kluczu dla typu tabeli.
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
