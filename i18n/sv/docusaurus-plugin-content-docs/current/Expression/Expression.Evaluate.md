---
title: Expression.Evaluate
---

# Expression.Evaluate


Returnerar resultatet från utvärderingen av ett M-uttrycket.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Returnerar resultatet från utvärderingen av ett M-uttryck <code>document</code>, med de tillgängliga identifierare som kan refereras till definierade av <code>environment</code>.


## Examples

### Example #1 
Utvärdera en enkel summa.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Utvärdera en mer komplex summa.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Utvärdera sammanlänkningen av ett textvärde med en identifierare.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
