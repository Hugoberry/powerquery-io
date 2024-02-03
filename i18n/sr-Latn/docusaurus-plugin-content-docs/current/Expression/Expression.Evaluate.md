---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Vraća rezultat procene M izraza.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Vraća rezultat procene M izraza <code>document</code>, sa dostupnim identifikatorima na koje se može upućivati preko definicije koju je sastavio/la <code>environment</code>.


## Examples

### Example #1 
Procenjivanje jednostavnog zbira.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Procenjivanje složenijeg zbira.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Procenjivanje konkatenacije tekstualne vrednosti i identifikatora.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
