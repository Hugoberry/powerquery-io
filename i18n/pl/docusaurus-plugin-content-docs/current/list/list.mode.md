---
title: List.Mode
---

# List.Mode


Zwraca wartość, która najczęściej występuje na liście.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Zwraca element najczęściej występujący w `list`. Jeśli lista jest pusta, zgłaszany jest błąd. Jeśli wiele elementów jest wyświetlanych z taką samą częstotliwością maksymalną, zostanie wybrana ostatnia. Można określić opcjonalną wartość kryteriów porównawczych, `equationCriteria`, aby kontrolować testowanie równości.


## Examples

### Example #1
Znajdź element najczęściej występujący na liście `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Znajdź element najczęściej występujący na liście `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
