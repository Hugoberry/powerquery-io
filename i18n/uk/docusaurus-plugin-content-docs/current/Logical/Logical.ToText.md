---
title: Logical.ToText
---

# Logical.ToText


## Description

Повертає текст &#34;true&#34; або &#34;false&#34; по заданому логічному значенню.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Створює текстове значення з логічного значення <code>logicalValue</code>, <code>true</code> або <code>false</code>. Якщо <code>logicalValue</code> не є логічним значенням, повертається виняткова ситуація.


## Examples

### Example #1 
Створити текстове значення з логічного &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
