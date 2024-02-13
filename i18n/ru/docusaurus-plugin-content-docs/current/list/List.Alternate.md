---
title: List.Alternate
---

# List.Alternate


Возвращает список, состоящий из всех нечетных элементов смещения в списке.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Remarks

Возвращает список, состоящий из всех нечетных элементов смещения в списке. Попеременно принимает и пропускает значения из списка <code>list</code> в зависимости от параметров.    <ul>    <li><code>count</code>: указывает число значений, которые пропускаются каждый раз.</li>    <li><code>repeatInterval</code>: необязательный интервал повтора, указывающий, сколько значений добавляются между пропущенными значениями.</li>    <li><code>offset</code>: параметр смещения, с которого начинается пропуск значений.</li>    </ul>


## Examples

### Example #1 
Создать список из \{1..10}, в котором первое число пропускается.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Создать список из \{1..10}, в котором пропускается каждое второе значение.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Создать список из \{1..10}, который начинается с 1 и пропускает каждое второе значение.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Создать список из \{1..10}, который начинается с 1, пропускает одно значение, сохраняет два значения и т. д.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
