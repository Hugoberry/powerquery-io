---
title: Logical.FromText
---

# Logical.FromText


"true" ve "false" metin değerlerinden bir metinsel değer oluşturur.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

"true" veya "false" olan `text` metin değerinden bir metinsel değer oluşturur. `text` farklı bir dize içeriyorsa, bir hata oluşur. `text` metin değeri büyük/küçük harfe duyarlıdır.


## Examples

### Example #1
"true" metin dizesinden mantıksal bir değer oluşturur.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
"a" metin dizesinden mantıksal bir değer oluşturur.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
