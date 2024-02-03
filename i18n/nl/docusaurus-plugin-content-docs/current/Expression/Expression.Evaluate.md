---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Hiermee wordt het resultaat van de evaluatie van een M-expressie geretourneerd.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Hiermee wordt het resultaat geretourneerd van de evaluatie van de M-expressie <code>document</code> met de beschikbare id's waarnaar kan worden verwezen, gedefinieerd door <code>environment</code>.


## Examples

### Example #1 
Een eenvoudige som evalueren.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Een complexe som evalueren.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
De samenvoeging van een tekstwaarde en een id evalueren.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
