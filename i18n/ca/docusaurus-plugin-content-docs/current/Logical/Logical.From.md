---
title: Logical.From
---

# Logical.From


## Description

Crea una lògica a partir del valor donat.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Retorna un valor <code>logical</code> a partir del valor <code>value</code> proporcionat. Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Logical.From</code> retorna <code>null</code>.  Si el valor <code>value</code> proporcionat és <code>logical</code>, es retorna <code>value</code>. Els valors dels tipus següents es poden convertir en un valor <code>logical</code>:      <ul>        <li><code>text</code>: un valor <code>logical</code> a partir del valor de text, <code>"true"</code> o <code>"false"</code>. Consulteu <code>Logical.FromText</code> per obtenir més informació.</li>        <li><code>number</code>: <code>false</code> si <code>value</code> és igual a <code>0</code>, <code>true</code> en cas contrari.</li>      </ul>Si <code>value</code> és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1 
Converteix &lt;code&gt;2&lt;/code&gt; en un valor &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
