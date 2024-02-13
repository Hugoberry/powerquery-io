---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Zwraca nowy typ tabeli, w którym wszystkie klucze zostały zastąpione kluczami z określonej listy kluczy.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Zwraca nowy typ tabeli, w którym wszystkie klucze zostały zastąpione kluczami z określonej listy kluczy.<br />    <br />    Każdy klucz jest definiowany przy użyciu rekordu w następującej postaci:    <ul>      <li>        <code>Kolumny</code>: lista nazw kolumn, która definiuje klucz      </li>      <li>        <code>Podstawowy</code>: <code>true</code>, jeśli klucz jest kluczem podstawowym; w przeciwnym razie <code>false</code>      </li>    </ul>    Określona lista kluczy jest weryfikowana w celu zapewnienia, że nie zdefiniowano więcej niż jednego klucza podstawowego i że wszystkie nazwy kolumn kluczy istnieją w typie tabeli.    


## Examples

### Example #1 
Zamień informacje o kluczu dla typu tabeli.
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
Wyczyść informacje o kluczu zdefiniowane wcześniej dla typu tabeli.
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
