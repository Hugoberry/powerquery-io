---
title: Expression.Evaluate
---

# Expression.Evaluate


Повертає результат оцінювання виразу M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Повертає результат оцінювання виразу M `document` з наявними ідентифікаторами, на які можна посилатися (визначені `environment`).


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
