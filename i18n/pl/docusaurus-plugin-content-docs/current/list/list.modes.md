---
title: List.Modes
---

# List.Modes


Zwraca listę wartości najczęściej występujących na danej liście.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Zwraca elementy najczęściej wyświetlane w liście`list`. Jeśli lista jest pusta, zgłaszany jest błąd. Jeśli wiele elementów jest wyświetlanych z taką samą maksymalną częstotliwością, są zwracane wszystkie z nich. Można określić opcjonalną wartość kryteriów porównawczych, `equationCriteria`, aby kontrolować testowanie równości.


## Examples

### Example #1
Znajdź elementy najczęściej występujące na liście `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
