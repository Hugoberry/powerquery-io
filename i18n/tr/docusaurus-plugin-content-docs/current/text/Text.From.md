---
title: Text.From
---

# Text.From


Verilen değerden bir metin değeri oluşturur.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

<code>value</code> değerinin metin gösterimini döndürür. <code>value</code> bir <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> veya <code>binary</code> olabilir.    Verilen değer null ise <code>Text.From</code> null döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").


## Examples

### Example #1 
3 sayısından metin değeri oluşturur.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
