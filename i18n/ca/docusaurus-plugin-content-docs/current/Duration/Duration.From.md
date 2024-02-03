---
title: Duration.From
---

# Duration.From


## Description

Crea una durada a partir del valor donat.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Retorna un valor <code>duration</code> a partir del valor <code>value</code> proporcionat. Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Duration.From</code> retorna <code>null</code>.  Si el valor <code>value</code> proporcionat és <code>duration</code>, es retorna <code>value</code>. Els valors dels tipus que s'indiquen a continuació es poden convertir en un valor <code>duration</code>:      <ul>        <li><code>text</code>: valor <code>duration</code> a partir de formes textuals del temps transcorregut (d.h:m:s). Consulteu <code>Duration.FromText</code> per obtenir més informació.</li>        <li><code>number</code>: equivalent de <code>duration</code> al nombre de dies complets i fraccionaris expressat per <code>value</code>.</li>      </ul>Si <code>value</code> és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1 
Converteix &lt;code&gt;2.525&lt;/code&gt; en un valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
