---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Повертає результат оцінювання виразу M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Повертає результат оцінювання виразу M <code>document</code> з наявними ідентифікаторами, на які можна посилатися (визначені <code>environment</code>).


## Examples

### Example #1 
Обчисліть просту суму.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Обчисліть складнішу суму.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Оцініть злиття текстового значення з ідентифікатором.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
