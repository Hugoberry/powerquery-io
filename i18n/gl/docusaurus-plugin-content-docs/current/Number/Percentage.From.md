---
title: Percentage.From
---

# Percentage.From


## Description

Devolve un valor de porcentaxe do valor fornecido.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Devolve un valor <code>percentage</code> do <code>value</code> indicado. Se o <code>value</code> indicado é <code>null</code>, <code>Percentage.From</code> devolve <code>null</code>.  Se o <code>value</code> indicado é <code>text</code> cun símbolo de porcentaxe ao final, devolverase o número decimal convertido. Se non, o valor converterase nun <code>number</code> usando <code>Number.From</code>. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Obtén o valor de &lt;code&gt;porcentaxe&lt;/code&gt; de &lt;code&gt;&#34;12,3 %&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
