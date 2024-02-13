---
title: List.Union
---

# List.Union


Zwraca złożenie wartości list znalezionych w danych wejściowych.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Przyjmuje listę list <code>lists</code>, tworzy złożenie elementów na poszczególnych listach i zwraca je w postaci listy wyjściowej. W wyniku tego zwracana lista zawiera wszystkie elementy z list wejściowych.     Ta operacja zachowuje tradycyjną semantykę wielozbiorów, więc zduplikowane wartości są dopasowywane w ramach złożenia.    W celu sterowania sprawdzaniem równości można określić opcjonalną wartość kryterium równości <code>equationCriteria</code>. 


## Examples

### Example #1 
Utwórz złożenie list \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
