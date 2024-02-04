---
title: Single.From
---

# Single.From


## Description

Cria um número Único a partir do valor fornecido.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Devolve um Singular <code>number</code> do fornecido <code>value</code>. Se o <code>value</code> fornecido for <code>null</code>, <code>Single.From</code> devolve <code>null</code>.  Se o fornecido <code>value</code> for <code>number</code> dentro do intervalo Singular <code>value</code> é devolvido, caso contrário é devolvido um erro. Se <code>value</code> for de qualquer outro tipo, primeiro será convertido num <code>number</code> utilizando <code>Number.FromText</code>. Um opcional <code>culture</code> também poderá ser devolvido (por exemplo, "en-US").


## Examples

### Example #1 
Obter o valor &lt;code&gt;number&lt;/code&gt; Único de &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
