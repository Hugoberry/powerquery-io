---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Повертає список, який видаляє вказану кількість елементів із кінця списку.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Повертає список, який видаляє останні <code>countOrCondition</code> елементів із кінця списку <code>list</code>. Якщо у списку <code>list</code> міститься менше <code>countOrCondition</code> елементів, повертається пустий список. <ul> <li>Якщо вказано кількість, видаляється елементів не більше, ніж указано. </li> <li>Якщо вказано умову, повертається список, який закінчується першим елементом із кінця списку <code>list</code>, що задовольняє критерії. Як тільки один елемент не задовольняє умову, наступні елементи не розглядаються. </li> <li>Якщо цей параметр має Null-значення, видаляється лише один елемент. </li> </ul>


## Examples

### Example #1 
Створити список із \{1, 2, 3, 4, 5} без останніх 3 чисел.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Створити список із \{5, 4, 2, 6, 4}, який закінчується з числа, меншого 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
