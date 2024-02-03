---
title: List.Sort
---

# List.Sort


## Description

Sortuje listę danych zgodnie z określonymi kryteriami.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Sortuje listę danych <code>list</code> zgodnie z określonymi opcjonalnymi kryteriami.    Opcjonalny parametr <code>comparisonCriteria</code> można określić jako operator porównania. Ten parametr może mieć następujące wartości:    <ul>    <li> Aby kontrolować kolejność, można jako kryterium porównania użyć wartości wyliczenia Order. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Aby obliczyć klucz, który będzie używany na potrzeby sortowania, można użyć argumentu o wartości 1. </li>    <li> Aby wybrać klucz i sterować kolejnością, można użyć kryterium porównania w postaci listy zawierającej klucz i kolejność (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li>  <li>Aby całkowicie kontrolować porównanie, można użyć funkcji 2 argumentów. Ta funkcja zostanie przekazana z listy dwoma elementami (dowolne dwa elementy w dowolnej kolejności). Funkcja powinna zwrócić jedną z następujących wartości: <ul> <li><code>-1</code>: Pierwszy element jest mniejszy niż drugi element.</li> <li><code>0< /code>: Elementy są równe.</li> <li><code>1</code>: pierwszy element jest większy niż drugi element.</li> </ul> Value.Compare to metoda, której można użyć do delegowania tej logiki. </li>     </ul>


## Examples

### Example #1 
Posortuj listę \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Posortuj listę \{2, 3, 1} w kolejności malejącej.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Posortuj listę \{2, 3, 1} w kolejności malejącej, używając metody Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
