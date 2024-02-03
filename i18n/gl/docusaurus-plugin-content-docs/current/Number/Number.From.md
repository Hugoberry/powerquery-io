---
title: Number.From
---

# Number.From


## Description

Crea un número a partir do valor indicado.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Devolve un valor <code>number</code> a partir do <code>value</code> indicado. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").Se o valor <code>value</code> é <code>null</code>, <code>Number.From</code> devolve <code>null</code>. Se o valor <code>value</code> é <code>number</code>, devólvese <code>value</code>. Pódense converter a un valor <code>number</code> os valores dos seguintes tipos:      <ul>        <li><code>text</code>: valor <code>number</code> a partir da representación textual. Contrólanse os formatos de número comúns ("15", "3.423,10", "5,0E-10"). Consulte <code>Number.FromText</code> para obter máis información.</li>        <li><code>logical</code>: 1 para <code>true</code>, 0 para <code>false</code>.</li>        <li><code>datetime</code>: número de punto flotante de dobre precisión que contén un equivalente da data de OLE Automation.</li>        <li><code>datetimezone</code>: número de punto flotante de dobre precisión que contén un equivalente da data de OLE Automation da data e hora locais de <code>value</code>.</li>        <li><code>date</code>: número de punto flotante de dobre precisión que contén un equivalente da data de OLE Automation.</li>        <li><code>time</code>: expresado en fraccións de días.</li>        <li><code>duration</code>: expresado en fraccións de días e días completos.</li>      </ul>Se <code>value</code> é de calquera outro tipo, devólvese un erro.


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
Obtén o valor de &lt;code&gt;número&lt;/code&gt; de &lt;code&gt;&#34;12,3 %&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
