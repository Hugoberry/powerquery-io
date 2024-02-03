---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Palauttaa M-lausekkeen arvioinnin tuloksen.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Palauttaa M-lausekkeen <code>document</code> arvioinnin tuloksen niiden käytettävissä olevien tunnisteiden avulla, joihin voidaan viitata kohteen <code>environment</code> määrittämänä.


## Examples

### Example #1 
Arvioi yksinkertainen summa.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Arvioi monimutkaisempi summa.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Arvioi tekstiarvon yhdistäminen tunnisteen kanssa.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
