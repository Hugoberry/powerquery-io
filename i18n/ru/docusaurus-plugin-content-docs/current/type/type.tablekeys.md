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

Возвращает (возможно, пустой) список ключей для данного типа таблицы.  
  
Каждый ключ определяется с помощью записи в следующей форме:

-   `Столбцы`: список имен столбцов, которые определяют ключ
-   `Первичный`: `true` если ключ является первичным ключом таблицы; в противном случае `false`


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
