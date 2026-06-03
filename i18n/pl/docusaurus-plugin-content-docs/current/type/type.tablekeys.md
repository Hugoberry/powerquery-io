---
title: Type.TableKeys
---

# Type.TableKeys


Zwraca listę kluczy, która może być pusta, tabeli danego typu.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Zwraca być może pustą listę kluczy dla danego typu tabeli.  
  
Każdy klucz jest definiowany przy użyciu rekordu w następującej postaci:

-   `Kolumny`: lista nazw kolumn, która definiuje klucz
-   `Podstawowy`: `true`, jeśli klucz jest kluczem podstawowym; w przeciwnym razie `false`


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
