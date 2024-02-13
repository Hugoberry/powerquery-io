---
title: Logical.FromText
---

# Logical.FromText


&#34;true&#34; ve &#34;false&#34; metin değerlerinden bir metinsel değer oluşturur.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

"true" veya "false" olan <code>text</code> metin değerinden bir metinsel değer oluşturur. <code>text</code> farklı bir dize içeriyorsa, özel durum oluşur. <code>text</code> metin değeri büyük/küçük harfe duyarlıdır.


## Examples

### Example #1 
&#34;true&#34; metin dizesinden mantıksal bir değer oluşturur.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
&#34;a&#34; metin dizesinden mantıksal bir değer oluşturur.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
