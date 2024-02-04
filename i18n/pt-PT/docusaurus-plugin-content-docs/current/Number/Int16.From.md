---
title: Int16.From
---

# Int16.From


## Description

Cria um número inteiro de 16 bits a partir do valor fornecido.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Devolve um valor de número inteiro de 16 bits <code>number</code> do fornecido <code>value</code>. Se o <code>value</code> fornecido for <code>null</code>, <code>Int16.From</code> devolve <code>null</code>.  Se o <code>value</code> fornecido for <code>number</code> no intervalo de números inteiros de 16 bits sem uma parte fracional, <code>value</code> é devolvido. Se tiver uma parte fracional, o número é arredondado com o modo de arredondamento especificado. O modo de arredondamento predefinido é <code>RoundingMode.ToEven</code>. Se <code>value</code> for de qualquer outro tipo, primeiro será convertido num <code>number</code> utilizando <code>Number.FromText</code>. Consulte <code>Number.Round</code> para ver os modos de arredondamento disponíveis. Um opcional <code>culture</code> também poderá ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Obter o valor &lt;code&gt;number&lt;/code&gt; inteiro de 16 bits de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obter o valor &lt;code&gt;number&lt;/code&gt; inteiro de 16 bits de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; com &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
