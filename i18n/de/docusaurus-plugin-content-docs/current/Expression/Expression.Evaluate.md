---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Gibt das Ergebnis der Auswertung eines M-Ausdrucks zurück.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Gibt das Ergebnis der Auswertung eines M-Ausdrucks "<code>document</code>" mit den verfügbaren Bezeichnern zurück, auf die durch <code>environment</code> verwiesen werden kann.


## Examples

### Example #1 
Hiermit wird eine einfache Summe ausgewertet.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Hiermit wird eine komplexere Summe ausgewertet.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Hiermit wird die Verkettung eines Textwerts mit einem Bezeichner ausgewertet.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
