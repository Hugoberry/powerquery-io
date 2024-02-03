---
title: Double.From
---

# Double.From


## Description

Crea un real a partir do valor facilitado.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Devolve un valor <code>number</code> Double a partir do <code>value</code> indicado. Se o <code>value</code> indicado é <code>null</code>, <code>Double.From</code> devolve <code>null</code>. Se o <code>value</code> indicado é <code>number</code> dentro do intervalo Double, <code>value</code> devólvese, se non, devólvese un erro. Se <code>value</code> é doutro tipo, primeiro converterase nun <code>number</code> usando <code>Number.FromText</code>. Tamén se pode fornecer unha <code>culture</code>opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Obteña o valor &lt;code&gt;number&lt;/code&gt; real de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
