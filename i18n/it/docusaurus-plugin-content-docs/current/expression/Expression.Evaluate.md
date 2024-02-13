---
title: Expression.Evaluate
---

# Expression.Evaluate


Restituisce il risultato della valutazione di un&#39;espressione M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Restituisce il risultato della valutazione di un'espressione M <code>document</code>, in cui gli identificatori disponibili cui è possibile fare riferimento sono definiti da <code>environment</code>.


## Examples

### Example #1 
Valutare una somma semplice.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Valutare una somma più complessa.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Valutare la concatenazione di un valore di testo con un identificatore.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
