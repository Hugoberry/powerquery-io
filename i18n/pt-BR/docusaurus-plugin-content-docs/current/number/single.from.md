---
title: Single.From
---

# Single.From


Cria um Único para o valor determinado.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna um valor <code>number</code> Único com base no <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Single.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for um <code>number</code> dentro do intervalo de Único, <code>value</code> será retornado. Caso contrário, um erro será retornado. Se o <code>value</code> for de qualquer outro tipo, será convertido primeiro para um <code>number</code> usando <code>Number.FromText</code>. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1 
Obtenha o valor &lt;code&gt;number&lt;/code&gt; Único de &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
