---
title: List.MaxN
---

# List.MaxN


## Description

Возвращает максимальные значения в списке. Необходимо указать количество возвращаемых значений или условие фильтрования.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Возвращает максимальные значения в списке <code>list</code>.    После сортировки строк результаты могут быть отфильтрованы с помощью необязательных параметров. Необязательный параметр <code>countOrCondition</code> указывает количество возвращаемых значений или условие фильтрации. Необязательный параметр <code>comparisonCriteria</code> указывает, как сравнивать значения в списке. <ul>        <li> <code>list</code>: список значений.</li>        <li> <code>countOrCondition</code>: если указано число, возвращается список элементов до <code>countOrCondition</code> по возрастанию. Если указано условие, возвращается список элементов, которые изначально соответствуют условию. Как только обнаруживается элемент, не соответствующий условию, последующие элементы не рассматриваются.</li><li><code>comparisonCriteria</code>: <i>[Необязательно]</i> Необязательное значение <code>comparisonCriteria</code> определяет, как сравнивать элементы в списке. Если этот параметр имеет значение NULL, используется функция сравнения по умолчанию. </li></ul>



## Category
List.Ordering