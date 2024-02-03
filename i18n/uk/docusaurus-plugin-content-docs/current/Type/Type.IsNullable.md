---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Повертає значення &#34;істина&#34;, якщо тип підтримує пусті значення. В іншому разі повертає значення &#34;хибність&#34;.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Повертає значення <code>true</code>, якщо тип – <code>nullable</code>. В іншому разі повертає значення <code>false</code>.


## Examples

### Example #1 
Визначити, чи тип &lt;code&gt;number&lt;/code&gt; підтримує пусті значення.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Визначити, чи тип &lt;code&gt;type nullable number&lt;/code&gt; підтримує пусті значення.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
