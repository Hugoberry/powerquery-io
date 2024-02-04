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

Devolve um valor <code>number</code> a partir do <code>value</code> especificado. Pode também ser fornecido um <code>culture</code> opcional (por exemplo, "en-US").Se o <code>value</code> especificado for <code>null</code>, <code>Number.From</code> devolve <code>null</code>.  Se o <code>value</code> especificado for <code>number</code>, será devolvido <code>value</code>. É possível converter os seguintes tipos de valor num valor <code>number</code>:      <ul>        <li><code>text</code>: Um valor <code>number</code> da representação textual. Os formatos de texto comuns são processados ("15", "3.423,10", "5,0E-10"). Consulte <code>Number.FromText</code> para obter detalhes.</li>        <li><code>logical</code>: 1 para <code>true</code>, 0 para <code>false</code>.</li>        <li><code>datetime</code>: Um número de vírgula flutuante de dupla precisão que contém um equivalente de data de Automatização OLE.</li>        <li><code>datetimezone</code>: Um número de vírgula flutuante de dupla precisão que contém uma data de Automatização OLE equivalente da data e hora local de <code>value</code>.</li>        <li><code>date</code>: Um número de vírgula flutuante de dupla precisão que contém um equivalente de data de Automatização OLE.</li>        <li><code>time</code>: Expresso em dias fracionais.</li>        <li><code>duration</code>: Expresso em dias inteiros e fracionais.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1 
Obter o valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obter o valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Obter o &lt;code&gt;valor&lt;/code&gt; do número de &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
