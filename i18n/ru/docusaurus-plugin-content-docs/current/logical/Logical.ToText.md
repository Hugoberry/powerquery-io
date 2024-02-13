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

Создает текстовое значение из логического значения <code>logicalValue</code>, <code>true</code> или <code>false</code>. Если <code>logicalValue</code> не является логическим значением, возникает исключение.


## Examples

### Example #1 
Создать текстовое значение из логического &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
