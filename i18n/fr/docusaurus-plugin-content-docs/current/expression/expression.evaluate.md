---
title: Expression.Evaluate
---

# Expression.Evaluate


Retourne le résultat de l'évaluation d'une expression M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Retourne le résultat de l'évaluation d'une expression M `document`, avec les identificateurs disponibles qui peuvent être référencés par `environment`.


## Examples

### Example #1
Évaluer une somme simple.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2
Évaluer une somme plus complexe.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3
Évaluer la concaténation d'une valeur de texte avec un identificateur.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
