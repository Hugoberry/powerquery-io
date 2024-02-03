---
title: Number.From
---

# Number.From


## Description

Cria um número a partir do valor especificado.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Retorna um valor <code>number</code> com base no <code>value</code> especificado. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").Se o <code>value</code> especificado for <code>null</code>, <code>Number.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for <code>number</code>, <code>value</code> será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor <code>number</code>:      <ul>        <li><code>text</code>: um valor <code>number</code> da representação textual. Os formatos de texto comuns são tratados ("15", "3,423.10", "5.0E-10"). Confira <code>Number.FromText</code> para obter informações detalhadas.</li>        <li><code>logical</code>: 1 para <code>true</code>, 0 para <code>false</code>.</li>        <li><code>datetime</code>: um número de ponto flutuante de precisão dupla que contém um equivalente de data de Automação OLE.</li>        <li><code>datetimezone</code>: um número de ponto flutuante de precisão dupla que contém um equivalente de data de Automação OLE da data e hora locais <code>value</code>.</li>        <li><code>date</code>: um número de ponto flutuante de precisão dupla que contém um equivalente de data de Automação OLE.</li>        <li><code>date</code>: expresso em dias fracionários.</li>        <li><code>duration</code>: expresso em dias inteiros e fracionários.</li>        </ul>Se <code>value</code> for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1 
Obtenha o valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtenha o valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Obtém o valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
