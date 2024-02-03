---
title: List.Modes
---

# List.Modes


## Description

Возвращает список наиболее частых значений в списке.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Возвращает элемент, который появляется чаще всего в списке <code>list</code>. Если список пуст, возникает исключение. Если несколько элементов присутствуют с одинаковой максимальной частотой, выбирается последний из них.    Можно указать необязательное значение <code>comparisonCriteria</code>, <code>equationCriteria</code>, для управления проверкой на равенство. 


## Examples

### Example #1 
Найти элементы, которые появляются чаще всего в списке &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
