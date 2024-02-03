---
title: Logical.ToText
---

# Logical.ToText


## Description

Retorna el text &#34;true&#34; o &#34;false&#34; donat un valor lògic.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Crea un valor de text a partir del valor lògic <code>logicalValue</code>, <code>true</code> o <code>false</code>. Si <code>logicalValue</code> no és un valor lògic, es produeix una excepció.


## Examples

### Example #1 
Crea un valor de text a partir del valor lògic &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
