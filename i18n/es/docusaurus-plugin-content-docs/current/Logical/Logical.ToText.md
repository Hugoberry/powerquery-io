---
title: Logical.ToText
---

# Logical.ToText


## Description

Devuelve el texto &#34;true&#34; or&#34;false&#34; dado un valor lógico.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Crea un valor de texto a partir del valor lógico <code>logicalValue</code>, ya sea <code>true</code> o <code>false</code>. Si <code>logicalValue</code> no es un valor lógico, se inicia una excepción.


## Examples

### Example #1 
Crear un valor de texto a partir del valor lógico &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
