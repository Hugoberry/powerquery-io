---
title: Logical.ToText
---

# Logical.ToText


## Description

Verilen mantıksal değerden &#34;true&#34; veya &#34;false&#34; metnini döndürür.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

<code>true</code> veya <code>false</code> olan <code>logicalValue</code> mantıksal değerinden bir metin değeri oluşturur. <code>logicalValue</code> mantıksal değer değilse, özel durum oluşur.


## Examples

### Example #1 
&lt;code&gt;true&lt;/code&gt; mantıksal değerinden metin değeri oluşturur.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
