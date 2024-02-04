---
title: Byte.From
---

# Byte.From


## Description

Cria um número inteiro de 8 bits a partir do valor fornecido.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Devolve um valor de número inteiro de 8 bits <code>number</code> a partir do fornecido <code>value</code>. Se o fornecido <code>value</code> for <code>null</code>, <code>Byte.From</code> devolve <code>null</code>. Se o fornecido <code>value</code> é um <code>number</code> dentro de um intervalo de um número inteiro de 8 bits sem uma parte fracional, <code>value</code> é devolvido. Se tem uma parte fracional, o número é arredondado com o modo de arredondamento especificado. O modo de arredondamento predefinido é <code>RoundingMode.ToEven</code>. Se <code>value</code> for de algum outro tipo, será primeiro convertido para um <code>number</code> utilizando <code>Number.FromText</code>. Consulte o <code>Number.Round</code> para os modos de arredondamento disponíveis. Um opcional <code>culture</code> também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Obter o valor &lt;code&gt;number&lt;/code&gt; inteiro de 8 bits de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obter o valor &lt;code&gt;number&lt;/code&gt; inteiro de 8 bits de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; com &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
