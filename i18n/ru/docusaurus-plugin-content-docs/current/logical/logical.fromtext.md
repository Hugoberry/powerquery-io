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

Создает логическое значение из текстового значения `text`: "true" или "false". Если `text` содержит другую строку, генерируется ошибка. В текстовом значении `text` не учитывается регистр.


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
Создание логического значения из текстовой строки "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
