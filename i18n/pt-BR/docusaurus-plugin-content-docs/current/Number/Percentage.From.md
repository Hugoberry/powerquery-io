---
title: Percentage.From
---

# Percentage.From


## Description

Retorna um valor de porcentagem de um determinado valor.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Retorna um valor <code>percentage</code> com base no <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Percentage.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for <code>text</code> com um símbolo de porcentagem final, o número decimal convertido será retornado. Caso contrário, o valor será convertido para um <code>number</code> usando <code>Number.From</code>. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1 
Obtém o valor &lt;code&gt;percentage&lt;/code&gt; de &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
