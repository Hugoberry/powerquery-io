---
title: List.InsertRange
---

# List.InsertRange


## Description

Wstawia wartości na listę pod danym indeksem.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Zwraca nową listę utworzoną przez wstawienie wartości z listy <code>values</code> na listę <code>list</code> pod indeksem <code>index</code>. Pierwsza pozycja na liście ma indeks 0.      <ul>        <li><code>list</code>: Lista docelowa, na którą będą wstawiane wartości.</li>        <li><code>index</code>: Indeks listy docelowej (<code>list</code>) określający, gdzie mają być wstawione wartości. Pierwsza pozycja na liście ma indeks 0.</li>        <li><code>values</code>: Lista wartości, które mają zostać wstawione na listę <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Wstaw listę (\{3, 4}) na listę docelową (\{1, 2, 5}) pod indeksem 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
Wstaw listę z zagnieżdżoną listą (\{1, \{1.1, 1.2}}) na listę docelową (\{2, 3, 4}) pod indeksem 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
