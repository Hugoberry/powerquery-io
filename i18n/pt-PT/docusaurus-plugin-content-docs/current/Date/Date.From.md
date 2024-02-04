---
title: Date.From
---

# Date.From


## Description

Cria uma data a partir do valor especificado.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Devolve um valor <code>date</code> a partir do <code>value</code> especificado. Pode também ser fornecido um <code>culture</code> opcional (por exemplo, "en-US").Se o <code>value</code> especificado for <code>null</code>, <code>Date.From</code> devolverá <code>null</code>. Se o <code>value</code> especificado for <code>date</code>, será devolvido <code>value</code>. É possível converter os seguintes tipos de valor num valor <code>date</code>:      <ul>        <li><code>text</code>: Um valor <code>date</code> da representação textual. Consulte <code>Date.FromText</code> para obter detalhes.</li>        <li><code>datetime</code>: o componente de data de <code>value</code>.</li>        <li><code>datetimezone</code>: o componente de data do equivalente local de data/hora de <code>value</code>.</li>        <li><code>number</code>: o componente de data do equivalente de data/hora da Data de Automatização OLE expresso por <code>value</code>.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1 
Converter &lt;code&gt;43910&lt;/code&gt; num valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Converter &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; num valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
