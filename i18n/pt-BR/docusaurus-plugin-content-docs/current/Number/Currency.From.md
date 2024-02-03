---
title: Currency.From
---

# Currency.From


## Description

Retorna um valor de moeda de um determinado valor.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Retorna um valor de <code>currency</code> com base no <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Currency.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for <code>number</code> dentro do intervalo de moeda, a parte fracional de <code>value</code> será arredondada para 4 dígitos decimais e retornada. Se o <code>value</code> for de qualquer outro tipo, será convertido primeiro para um <code>number</code> usando <code>Number.FromText</code>. O intervalo válido para moeda é <code>-922,337,203,685,477.5808</code> a <code>922,337,203,685,477.5807</code>. Confira <code>Number.Round</code> para os modos de arredondamento disponíveis. O padrão é <code>RoundingMode.ToEven</code>. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1 
Obtenha o valor de &lt;code&gt;moeda&lt;/code&gt; de &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Obter o valor de &lt;code&gt;moeda&lt;/code&gt; &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; usando &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
