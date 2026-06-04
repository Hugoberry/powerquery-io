---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Vrátí nový typ tabulky se všemi klíči nahrazenými zadaným seznamem klíčů.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Vrátí nový typ tabulky se všemi klíči nahrazenými zadaným seznamem klíčů.  
  
Každý klíč je definován pomocí záznamu v následujícím formátu:

-   `Sloupce`: seznam názvů sloupců, které definují klíč
-   `Primární`: `true` pokud je klíč primárním klíčem tabulky; jinak `false`

Zadaný seznam klíčů projde ověřením, aby se zajistilo, že není definován více než jeden primární klíč a že v typu tabulky existují všechny názvy klíčových sloupců.


## Examples

### Example #1
Nahraďte informace o klíči u typu tabulky.
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
Vymažte informace o klíči dříve definované pro typ tabulky.
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
