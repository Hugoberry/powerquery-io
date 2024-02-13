---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


Zwraca funkcję łączącą listę tekstów przy użyciu określonych pozycji i długości.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

Zwraca funkcję łączącą listę wartości tekstowych w jedną wartość tekstową przy użyciu określonych pozycji i długości. Długość o wartości null wskazuje, że cała wartość tekstowa powinna zostać dołączona.


## Examples

### Example #1 
Połącz listę wartości tekstowych przy użyciu określonych pozycji i długości danych wyjściowych.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
