---
title: Expression.Evaluate
---

# Expression.Evaluate


Devuelve el resultado de evaluar una expresión M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Devuelve el resultado de evaluar una expresión M <code>document</code>, con los identificadores disponibles a los que <code>environment</code> pueda hacer referencia.


## Examples

### Example #1 
Evaluar una suma simple.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Evalúe una suma más compleja.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Evalúe la concatenación de un valor de texto con un identificador.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
