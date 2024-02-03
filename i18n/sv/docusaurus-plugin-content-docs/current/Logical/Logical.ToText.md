---
title: Logical.ToText
---

# Logical.ToText


## Description

Returnerar texten &#34;true&#34; eller &#34;false&#34; baserat på ett logiskt värde.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Skapar ett textvärde från det logiska värdet <code>logicalValue</code>, antingen <code>true</code> eller <code>false</code>. Om <code>logicalValue</code> inte är ett logiskt värde genereras ett undantag.


## Examples

### Example #1 
Skapa ett textvärde från det logiska värdet &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
