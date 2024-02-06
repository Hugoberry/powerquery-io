---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


Returnerer en funktion, der kombinerer en liste over tekst til en enkelt tekst ved hjælp af de angivne længder.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Remarks

Returnerer en funktion, der kombinerer en liste over tekstværdier til en enkelt tekstværdi ved hjælp af de angivne længder.


## Examples

### Example #1 
Kombiner en liste over tekstværdier ved at udtrække det angivne antal tegn fra hver inputværdi.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Kombiner en liste over tekstværdier ved at udtrække de angivne antal tegn, når du først har udfyldt resultatet med skabelonteksten.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
