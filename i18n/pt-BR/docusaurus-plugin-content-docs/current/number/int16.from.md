---
title: Int16.From
---

# Int16.From


Cria um inteiro de 16 bits do valor determinado.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retorna um valor <code>number</code> inteiro de 16 bits com base no <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Int16.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for <code>number</code> dentro do intervalo de número inteiro de 16 bits sem uma parte fracionária, <code>value</code> será retornado. Se tiver uma parte fracionária, então o número será arredondado com o modo de arredondamento especificado. O modo de arredondamento padrão é <code>RoundingMode.ToEven</code>. Se <code>value</code> for qualquer outro tipo, será convertido primeiro para um <code>number</code> usando <code>Number.FromText</code>. Confira <code>Number.Round</code> para os modos de arredondamento disponíveis. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1 
Obtenha o valor de &lt;code&gt;number&lt;/code&gt; inteiro de 16 bits de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtém o valor &lt;code&gt;number&lt;/code&gt; inteiro de 16 bits de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; usando &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
