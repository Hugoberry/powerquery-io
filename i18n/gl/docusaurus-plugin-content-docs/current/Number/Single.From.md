---
title: Single.From
---

# Single.From


## Description

Crea un Single a partir do valor facilitado.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Devolve un valor <code>number</code> Single a partir do <code>value</code> indicado. Se o <code>value</code> indicado é <code>null</code>, <code>Single.From</code> devolve <code>null</code>. Se o <code>value</code> indicado é <code>number</code> dentro do intervalo Single, <code>value</code> devólvese, se non, devólvese un erro. Se <code>value</code> é doutro tipo, primeiro converterase nun <code>number</code> usando <code>Number.FromText</code>. Tamén se pode fornecer unha <code>culture</code>opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Obteña o valor &lt;code&gt;number&lt;/code&gt; Single de &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
