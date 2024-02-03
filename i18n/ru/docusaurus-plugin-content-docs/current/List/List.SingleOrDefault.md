---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Возвращает один элемент списка для списка с длиной 1 и значение по умолчанию для пустого списка.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Если в списке <code>list</code> только один элемент, возвращает этот элемент.    Если этот список пуст, функция возвращает значение NULL, если не указан необязательный параметр <code>default</code>. Если в списке больше одного элемента, функция возвращает ошибку.


## Examples

### Example #1 
Найти единственное значение в списке \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Найти единственное значение в списке \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Найти единственное значение в списке \{}. Если список пуст, возвратить -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
