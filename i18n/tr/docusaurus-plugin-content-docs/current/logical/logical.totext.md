---
title: Logical.ToText
---

# Logical.ToText


Verilen mantıksal değerden "true" veya "false" metnini döndürür.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

`true` veya `false` olan `logicalValue` mantıksal değerinden bir metin değeri oluşturur. `logicalValue` mantıksal bir değer değilse, bir hata oluşur.


## Examples

### Example #1
`true` mantıksal değerinden metin değeri oluşturur.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
