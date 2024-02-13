---
title: Double.From
---

# Double.From


Cria um número Duplo a partir do valor fornecido.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve um valor <code>number</code> Duplo a partir do <code>value</code> fornecido. Se o <code>value</code> fornecido for <code>null</code>, <code>Double.From</code> devolve <code>null</code>. Se o <code>value</code> fornecido for <code>number</code> dentro do intervalo de números Duplos, é devolvido <code>value</code>; caso contrário, é devolvido um erro. Se o <code>value</code> fornecido for de algum outro tipo, será primeiro convertido para um <code>number</code> utilizando <code>Number.FromText</code>. Um opcional <code>culture</code> também poderá ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Obter o valor &lt;code&gt;number&lt;/code&gt; Duplo de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
