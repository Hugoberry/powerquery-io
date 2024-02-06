---
title: Percentage.From
---

# Percentage.From


Devolve um valor de percentagem do valor determinado.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve um <code>percentage</code> do fornecido <code>value</code>. Se o <code>value</code> fornecido for <code>null</code>, <code>Percentage.From</code> devolve <code>null</code>.  Se o valor <code>value</code> for <code>text</code> com um símbolo de percentagem, o número decimal convertido será devolvido. Caso contrário, o valor será convertido num <code>number</code> utilizando <code>Number.From</code>. Um opcional <code>culture</code> também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Obter o &lt;code&gt;valor&lt;/code&gt; da percentagem de &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
