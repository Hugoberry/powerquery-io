---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Vrne rezultat ovrednotenja izraza M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Vrne rezultat ovrednotenja izraza M <code>document</code> z razpoložljivimi identifikatorji za sklicevanje, ki so določeni z <code>environment</code>.


## Examples

### Example #1 
Ovrednotite preprosto vsoto.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Ovrednotite bolj zapleteno vsoto.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Ovrednotite spojitev besedilne vrednosti z identifikatorjem.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
