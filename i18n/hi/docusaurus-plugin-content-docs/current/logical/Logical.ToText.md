---
title: Logical.ToText
---

# Logical.ToText


पाठ &#34;true&#34; या &#34;false&#34; लौटाता है जिसमें एक तार्किक मान दिया हुए होता है.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

पाठ मान <code>logicalValue</code>, से एक पाठ मान <code>true</code> या <code>false</code> बनाता है. अगर <code>logicalValue</code> एक तार्किक मान नहीं है, एक अपवाद दिखाया जाता है.


## Examples

### Example #1 
तार्किक &lt;code&gt;true&lt;/code&gt; से एक पाठ मान बनाएँ.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
