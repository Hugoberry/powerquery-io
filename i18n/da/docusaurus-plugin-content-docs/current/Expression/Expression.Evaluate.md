---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Returnerer resultatet af evalueringen af et M-udtryk.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Returnerer resultatet af evalueringen af et M-udtryk <code>document</code>, med de tilgængelige identifikatorer, der kan refereres til, som er defineret af <code>environment</code>.


## Examples

### Example #1 
Evaluer en enkel sum.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Evaluer en mere kompleks sum.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Evaluer sammenkædningen af en tekstværdi med en identifikator.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
