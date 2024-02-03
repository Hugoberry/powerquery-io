---
title: List.Skip
---

# List.Skip


## Description

Повертає список, який пропускає вказану кількість елементів на початку списку.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Повертає список, який пропускає перший елемент списку <code>list</code>. Якщо список <code>list</code> пустий, повертається пустий список.Для цієї функції можна вказати додатковий параметр <code>countOrCondition</code>, щоб пропускати кілька значень, як описано нижче. <ul> <li>Можна вказати максимальне число елементів для пропускання. </li> <li>Можна вказати умови, щоб повертався список, який починається з першого елемента в списку <code>list</code>, що відповідає цим умовам. Щойно виявиться невідповідність елемента умові, наступні елементи не розглядаються. </li> <li>Якщо цей параметр має Null-значення, функція працює стандартним чином. </li> </ul>


## Examples

### Example #1 
Створити список із \{1, 2, 3, 4, 5} без перших трьох чисел.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Створити список із \{5, 4, 2, 6, 1}, який починається з числа, меншого 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection