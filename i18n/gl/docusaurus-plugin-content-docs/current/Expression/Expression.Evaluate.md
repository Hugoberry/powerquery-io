---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Devolve o resultado de avaliar unha expresión M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Devolve o resultado de avaliar unha expresión M <code>document</code>, cos identificadores dispoñibles aos que se pode facer referencia definidos por <code>environment</code>.


## Examples

### Example #1 
Avaliar unha suma simple.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Avaliar unha suma máis complexa.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Avaliar a concatenación dun valor de texto cun identificador.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
