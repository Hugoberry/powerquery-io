---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Возвращает результат вычисления выражения M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Возвращает результат вычисления выражения <code>document</code> языка M с доступными для ссылки идентификаторами, которые определяет <code>environment</code>.


## Examples

### Example #1 
Вычисление простой суммы.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Вычисление более сложной суммы.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Вычисление объединения текстового значения с идентификатором.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
