---
title: Type.TableKeys
---

# Type.TableKeys


Повертає ймовірно пустий список ключів заданого типу таблиці.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Повертає ймовірно пустий список ключів заданого типу таблиці.  
  
Кожен ключ визначається за допомогою запису в такій формі:

-   `Columns`: список імен стовпців, які визначають ключі
-   `Primary`: `true`, якщо ключ є первинним ключем таблиці; в іншому разі `false`


## Examples

### Example #1
Повернення відомостей про ключ для типу таблиці.
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
