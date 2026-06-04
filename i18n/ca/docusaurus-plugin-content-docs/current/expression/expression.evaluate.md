---
title: Expression.Evaluate
---

# Expression.Evaluate


Retorna el resultat de l'avaluació d'una expressió M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Retorna el resultat de l'avaluació d'una expressió M `document`, amb els identificadors disponibles a què `environment` pugui fer referència.


## Examples

### Example #1
Avalueu una suma senzilla.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2
Avalueu una suma més complexa.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3
Avalueu la concatenació d'un valor de text amb un identificador.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
