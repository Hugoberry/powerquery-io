---
title: Type.TableKeys
---

# Type.TableKeys


Возвращает (возможно, пустой) список ключей для данного типа таблицы.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Возвращает (возможно, пустой) список ключей для данного типа таблицы.<br />    <br />    Каждый ключ определяется с помощью записи в следующей форме:    <ul>      <li>        <code>Столбцы</code>: список имен столбцов, которые определяют ключ      </li>      <li>        <code>Первичный</code>: <code>true</code> если ключ является первичным ключом таблицы; в противном случае <code>false</code>      </li>    </ul>    


## Examples

### Example #1 
Возвратить сведения о ключах для типа таблицы.
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
