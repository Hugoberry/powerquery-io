---
title: Decimal.From
---

# Decimal.From


## Description

Cria um Decimal para o valor especificado.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Retorna um valor <code>number</code> de Decimal com base no <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Decimal.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for um <code>number</code> dentro do intervalo de Decimal, <code>value</code> será retornado. Caso contrário, um erro será retornado. Se o <code>value</code> for de qualquer outro tipo, será convertido primeiro para um <code>number</code> usando <code>Number.FromText</code>. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1 
Obtenha o valor &lt;code&gt;number&lt;/code&gt; Decimal de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
