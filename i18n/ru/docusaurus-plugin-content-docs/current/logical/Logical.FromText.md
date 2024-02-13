---
title: Logical.FromText
---

# Logical.FromText


Создает логическое значение из текстовых значений true и false.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Создает логическое значение из текстового значения <code>text</code>, которое может быть равно true или false. Если <code>text</code> содержит другую строку, возникает исключение. В текстовом значении <code>text</code> не учитывается регистр.


## Examples

### Example #1 
Создание логического значения из текстовой строки true.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Создание логического значения из текстовой строки &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
