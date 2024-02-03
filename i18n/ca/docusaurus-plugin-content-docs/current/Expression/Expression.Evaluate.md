---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Retorna el resultat de l&#39;avaluació d&#39;una expressió M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Retorna el resultat de l'avaluació d'una expressió M <code>document</code>, amb els identificadors disponibles a què <code>environment</code> pugui fer referència.


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
Avalueu la concatenació d&#39;un valor de text amb un identificador.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
