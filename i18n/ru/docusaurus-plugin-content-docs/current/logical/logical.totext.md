---
title: Logical.ToText
---

# Logical.ToText


Возвращает текст true или false для данного логического значения.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Создает текстовое значение, `true` или `false`, из логического значения `logicalValue`. Если `logicalValue` не является логическим значением, генерируется ошибка.


## Examples

### Example #1
Создать текстовое значение из логического `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
