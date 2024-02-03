---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Pateikia M reiškinio įvertinimo rezultatą.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Pateikia M reiškinio <code>document</code> įvertinimo rezultatą su turimais identifikatoriais, kuriuos galima nurodyti pagal <code>environment</code>.


## Examples

### Example #1 
Įvertinkite paprastą sumą.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Įvertinkite sudėtingesnę sumą.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Įvertinkite tekstinės reikšmės sujungimą su identifikatoriumi.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression