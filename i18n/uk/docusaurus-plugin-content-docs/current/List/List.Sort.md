---
title: List.Sort
---

# List.Sort


## Description

Сортує список даних відповідно до вказаних критеріїв.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Сортує список даних <code>list</code> відповідно до вказаних додаткових умов.    Можна вказати додатковий параметр <code>comparisonCriteria</code> як умову порівняння. Він може приймати наведені нижче значення.    <ul>    <li> Для керування порядком як умову порівняння можна вказати значення порядку перелічення (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Щоб обчислити ключ для сортування, можна використати функцію з 1 аргументом. </li>    <li> Щоб вибрати ключ і контролювати порядок, умову порівняння можна вказати як список із ключем і значенням порядку (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Щоб повністю контролювати порівняння, можна використати функцію з 2 аргументами. Цій функції буде передано два елементи зі списку (будь-які два елементи в будь-якому порядку). Функція має повернути одне з наведених нижче значень:        <ul>            <li> <code>-1</code>: перший елемент менше другого елемента.</li>            <li> <code>0</code>: елементи рівні.</li>            <li> <code>1</code>: перший елемент більше другого елемента.</li>        </ul>        Для делегування цієї логіки можна використати метод Value.Compare. </li>    </ul>


## Examples

### Example #1 
Сортувати список \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Сортувати список \{2, 3, 1} за спаданням.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Сортувати список \{2, 3, 1} за спаданням, використовуючи метод Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
