---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Returns the result of evaluating an M expression.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Returns the result of evaluating an M expression <code>document</code>, with the available identifiers that can be referenced defined by <code>environment</code>.


## Examples

### Example #1 
Evaluate a simple sum.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Evaluate a more complex sum.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Evaluate the concatenation of a text value with an identifier.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
