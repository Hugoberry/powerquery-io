---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

किसी M व्यंजक के मूल्यांकन का परिणाम लौटाता है.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

ऐसे उपलब्ध पहचानकर्ताओं के साथ M व्यंजक <code>document</code> के मूल्यांकन का परिणाम लौटाता है, जिन्हें <code>environment</code> द्वारा परिभाषित रूप से संदर्भित किया जा सकता है.


## Examples

### Example #1 
किसी साधारण योग का मूल्यांकन करें.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
किसी अधिक जटिल योग का मूल्यांकन करें.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
किसी पहचानकर्ता के साथ पाठ मान के संयोजन का मूल्यांकन करें.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
