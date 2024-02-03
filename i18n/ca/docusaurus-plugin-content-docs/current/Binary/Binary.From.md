---
title: Binary.From
---

# Binary.From


## Description

Crea un binari a partir del valor donat


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Retorna un valor <code>binary</code> a partir del valor proporcionat, <code>value</code>. Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Binary.From</code> retorna <code>null</code>.  Si el valor <code>value</code> proporcionat és <code>binary</code>, es retorna <code>value</code>. Els valors dels tipus que s'indiquen a continuació es poden convertir en un valor <code>binary</code>:      <ul>        <li><code>text</code>: un valor <code>binary</code> a partir de la representació de text. Consulteu <code>Binary.FromText</code> per obtenir més informació.</li>      </ul>Si <code>value</code> és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1 
Obté el valor &lt;code&gt;binary&lt;/code&gt; de &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
