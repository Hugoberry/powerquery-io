---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


Zwraca funkcję łączącą listę tekstów przy użyciu określonych długości.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Remarks

Zwraca funkcję łączącą listę wartości tekstowych w jedną wartość tekstową przy użyciu określonych długości.


## Examples

### Example #1 
Połącz listę wartości tekstowych, wyodrębniając określoną liczbę znaków z każdej wartości danych wejściowych.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Połącz listę wartości tekstowych, wyodrębniając określone liczby znaków po pierwszym wypełnieniu wyniku tekstem szablonu.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
