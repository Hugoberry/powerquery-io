---
title: List.LastN
---

# List.LastN


Возвращает последнее значение в списке.  Дополнительно можно указать количество возвращаемых значений или условие соответствия.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Возвращает последний элемент списка <code>list</code>. Если список пуст, возникает исключение. Эта функция принимает необязательный параметр <code>countOrCondition</code> для поддержки сбора нескольких элементов или фильтрации элементов. <code>countOrCondition</code> можно указать тремя способами: <ul>  <li>Если указано число, возвращается количество элементов до указанного. </li>  <li>Если указано условие, возвращаются все элементы, которые изначально соответствуют условию, начиная с конца списка. Как только обнаруживается элемент, не соответствующий условию, последующие элементы не рассматриваются. </li>  <li>Если этот параметр имеет значение NULL, то возвращается последний элемент в списке.</li> </ul>


## Examples

### Example #1 
Найти последнее значение в списке \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Найти последние значения в списке \{3, 4, 5, -1, 7, 8, 2}, превышающие 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
