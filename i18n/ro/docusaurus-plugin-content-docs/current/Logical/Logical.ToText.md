---
title: Logical.ToText
---

# Logical.ToText


## Description

Returnează textul „true” sau „false” dintr-o valoare logică.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Creează o valoare text din valoarea logică <code>logicalValue</code>, fie <code>true</code>, fie <code>false</code>. Dacă <code>logicalValue</code> nu este o valoare logică, apare o excepţie.


## Examples

### Example #1 
Creaţi o valoare text din valoarea logică &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
