---
title: List.Mode
---

# List.Mode


## Description

Возвращает наиболее частое значение в списке.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Возвращает элемент, который появляется чаще всего в списке <code>list</code>. Если список пуст, возникает исключение. Если несколько элементов присутствуют с одинаковой максимальной частотой, выбирается последний из них.    Можно указать необязательное значение <code>comparisonCriteria</code>, <code>equationCriteria</code>, для управления проверкой на равенство. 


## Examples

### Example #1 
Найти элемент, который наиболее часто появляется в списке &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Найти элемент, который наиболее часто появляется в списке &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
