---
title: Decimal.From
---

# Decimal.From


## Description

Crea un decimal a partir do valor fornecido.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Devolve un valor <code>number</code> decimal a partir do <code>value</code> indicado. Se o <code>value</code> indicado é <code>null</code>, <code>Decimal.From</code> devolve <code>null</code>. Se o <code>value</code> indicado é <code>number</code> dentro do intervalo de Decimal, <code>value</code> devólvese, se non, devólvese un erro. Se <code>value</code> é doutro tipo, primeiro converterase nun <code>number</code> usando <code>Number.FromText</code>. Tamén se pode fornecer un <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Obteña o valor &lt;code&gt;number&lt;/code&gt; decimal de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
