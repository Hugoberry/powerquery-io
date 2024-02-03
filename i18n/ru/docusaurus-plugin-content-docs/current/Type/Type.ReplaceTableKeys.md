---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Возвращает новый тип таблицы, где все ключи заменены указанным списком ключей.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Возвращает новый тип таблицы, где все ключи заменены указанным списком ключей.<br />    <br />    Каждый ключ определяется с помощью записи в следующей форме:    <ul>      <li>        <code>Столбцы</code>: список имен столбцов, которые определяют ключ      </li>      <li>        <code>Первичный</code>: <code>true</code> если ключ является первичным ключом таблицы; в противном случае <code>false</code>      </li>    </ul>    Указанный список ключей проверяется, чтобы убедиться, что не определено более одного первичного ключа и что в типе таблицы существуют все имена ключевых столбцов.    


## Examples

### Example #1 
Заменить сведения о ключах для типа таблицы.
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
Очистить сведения о ключах, ранее определенных для типа таблицы.
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
