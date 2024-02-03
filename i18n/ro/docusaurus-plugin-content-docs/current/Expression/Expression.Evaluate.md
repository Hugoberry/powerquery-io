---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Returnează rezultatul evaluării unei expresii M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Returnează rezultatul evaluării unei expresii M <code>document</code>, cu identificatorii disponibili care pot fi menționați ca definiți de <code>environment</code>.


## Examples

### Example #1 
Evaluați o sumă simplă.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Evaluați o sumă mai complexă.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Evaluați concatenarea unei valori text cu un identificator.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
