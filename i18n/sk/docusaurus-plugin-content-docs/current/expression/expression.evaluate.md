---
title: Expression.Evaluate
---

# Expression.Evaluate


Vráti výsledok vyhodnotenia výrazu M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Vráti výsledok vyhodnotenia výrazu M `document` s dostupnými identifikátormi, na ktoré sa dá odkazovať, a sú definované podľa `environment`.


## Examples

### Example #1
Vyhodnotí jednoduchý súčet.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2
Vyhodnotí zložitejší súčet.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3
Vyhodnotí zreťazenie textovej hodnoty s identifikátorom.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
