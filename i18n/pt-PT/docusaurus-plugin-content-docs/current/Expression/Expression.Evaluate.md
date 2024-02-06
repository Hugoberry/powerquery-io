---
title: Expression.Evaluate
---

# Expression.Evaluate


Devolve o resultado da avaliação de uma expressão M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Devolve o resultado da avaliação de uma expressão M <code>document</code>, com os identificadores disponíveis que podem ser referênciados definidos por <code>environment</code>.


## Examples

### Example #1 
Avaliar uma soma simples.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Avaliar uma soma mais complexa.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Avaliar a concatenação de um valor de texto com um identificador.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
