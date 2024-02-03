---
title: Logical.ToText
---

# Logical.ToText


## Description

Devolve o texto &#34;verdadeiro&#34; ou &#34;falso&#34; indicado un valor lóxico.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Crea un valor de texto a partir do valor lóxico <code>logicalValue</code>, ou <code>true</code> ou <code>false</code>. Se <code>logicalValue</code> non é un valor lóxico, xérase unha excepción.


## Examples

### Example #1 
Crear un valor de texto a partir de &lt;code&gt;true&lt;/code&gt; lóxico.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
