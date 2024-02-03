---
title: Double.From
---

# Double.From


## Description

Cria um Dobro do valor determinado.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Retorna um valor <code>number</code> Dobro com base no <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Double.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for um <code>number</code> dentro do intervalo de Dobro, <code>value</code> será retornado. Caso contrário, um erro será retornado. Se o <code>value</code> for de qualquer outro tipo, será convertido primeiro para um <code>number</code> usando <code>Number.FromText</code>. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1 
Obtenha o valor de &lt;code&gt;number&lt;/code&gt; de Dobro de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
