---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Повертає новий тип таблиці зі всіма ключами, заміненими вказаними списками ключів.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Повертає новий тип таблиці зі всіма ключами, заміненими вказаними списками ключів.<br />    <br />    Кожен ключ визначається за допомогою запису в такій формі:     <ul>      <li>        <code>Columns</code>: список імен стовпців, які визначають ключі      </li>      <li>        <code>Primary</code>: <code>true</code>, якщо ключ є первинним ключем таблиці; в іншому разі <code>false</code>      </li>    </ul>    Указаний список ключів перевіряється, щоб гарантувати, що визначено не більш як один первинний ключ і всі імена стовпців ключів існують у типі таблиці.    


## Examples

### Example #1 
Заміна відомостей про ключ для типу таблиці.
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
Очищення відомостей про ключ, попередньо визначених у типі таблиці.
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
