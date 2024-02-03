---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Повертає ймовірно пустий список ключів заданого типу таблиці.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Повертає ймовірно пустий список ключів заданого типу таблиці.<br />    <br />    Кожен ключ визначається за допомогою запису в такій формі:     <ul>      <li>        <code>Columns</code>: список імен стовпців, які визначають ключі      </li>      <li>        <code>Primary</code>: <code>true</code>, якщо ключ є первинним ключем таблиці; в іншому разі <code>false</code>      </li>    </ul>    


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
