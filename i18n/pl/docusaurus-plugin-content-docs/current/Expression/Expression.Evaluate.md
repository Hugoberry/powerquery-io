---
title: Expression.Evaluate
---

# Expression.Evaluate


Zwraca wynik obliczania wyrażenia języka M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Zwraca wynik obliczania wyrażenia języka M <code>document</code> z dostępnymi identyfikatorami, do których można się odwołać, określonymi za pomocą <code>environment</code>.


## Examples

### Example #1 
Ocena prostej sumy.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Ocena bardziej złożonej sumy.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Ocena połączenia wartości tekstowej z identyfikatorem.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
