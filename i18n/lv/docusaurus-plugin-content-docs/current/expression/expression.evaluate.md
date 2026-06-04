---
title: Expression.Evaluate
---

# Expression.Evaluate


Atgriež M izteiksmes novērtēšanas rezultātu.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Atgriež M izteiksmes `document` novērtēšanas rezultātu ar pieejamajiem identifikatoriem, uz kuriem var būt atsauces, ko definē `environment`.


## Examples

### Example #1
Novērtējiet vienkāršu summu.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2
Novērtējiet sarežģītāku summu.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3
Novērtējiet teksta vērtības savienošanu ar identifikatoru.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
