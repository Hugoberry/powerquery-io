---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Zwraca funkcję łączącą listę tekstów przy użyciu określonych pozycji danych wyjściowych.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Zwraca funkcję łączącą listę wartości tekstowych w jedną wartość tekstową przy użyciu określonych pozycji danych wyjściowych.


## Examples

### Example #1 
Połącz listę wartości tekstowych, umieszczając je w danych wyjściowych w określonych pozycjach.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
