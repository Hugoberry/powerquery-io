---
title: Expression.Evaluate
---

# Expression.Evaluate


Vrátí výsledek vyhodnocení výrazu M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Vrátí výsledek vyhodnocení výrazu M `document` s dostupnými identifikátory, na které se dá odkazovat, definovanými podle `environment`.


## Examples

### Example #1
Vyhodnotí jednoduchý součet.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2
Vyhodnotí komplexnější součet.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3
Vyhodnotí zřetězení textové hodnoty s identifikátorem.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
