---
title: Logical.ToText
---

# Logical.ToText


Returnerer den logiske tekstværdi &#34;true&#34; eller &#34;false&#34;.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Opretter en tekstværdi ud fra den logiske værdi <code>logicalValue</code>, enten <code>true</code> eller <code>false</code>. Hvis <code>logicalValue</code> ikke er en logisk værdi, udløses der en undtagelse.


## Examples

### Example #1 
Opret en tekstværdi ud fra det logiske &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
