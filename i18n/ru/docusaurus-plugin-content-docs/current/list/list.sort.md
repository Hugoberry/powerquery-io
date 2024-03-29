---
title: List.Sort
---

# List.Sort


Сортирует список данных по указанным критериям.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Сортирует списки данных, <code>list</code>, в соответствии с заданными необязательными критериями.    В качестве критерия сравнения можно указать необязательный параметр <code>comparisonCriteria</code>. Он может принимать следующие значения:    <ul>    <li> Для управления порядком критерий сравнения может быть значением перечисления Order. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Для вычисления ключа, используемого для сортировки, можно использовать функцию 1 аргумента. </li>    <li> Для выбора ключа и порядка управления можно использовать критерий сравнения, представляющий собой список, содержащий ключ и порядок (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Для полного управления сравнением можно использовать функцию из 2 аргументов. Этой функции будут переданы два элемента из списка (два любых элемента в любом порядке). Эта функция должна возвратить одно из следующих значений:        <ul>            <li> <code>-1</code>: первый элемент меньше второго.</li>            <li> <code>0</code>: элементы равны.</li>            <li> <code>1</code>: первый элемент больше второго.</li>        </ul>        С помощью метода Value.Compare можно делегировать эту логику. </li>    </ul>


## Examples

### Example #1 
Сортировать список \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Сортировать список \{2, 3, 1} в порядке убывания.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Сортировать список \{2, 3, 1} в порядке убывания с помощью метода Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
