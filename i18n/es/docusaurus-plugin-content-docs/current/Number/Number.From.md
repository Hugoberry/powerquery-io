---
title: Number.From
---

# Number.From


## Description

Crea un número a partir del valor dado.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Devuelve un valor <code>number</code> a partir del valor <code>value</code> dado. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").Si <code>value</code> es <code>null</code>, <code>Number.From</code> devuelve <code>null</code>. Si <code>value</code> es <code>number</code>, se devuelve <code>value</code>. Los valores de los tipos siguientes se pueden convertir a un valor <code>number</code>:      <ul>        <li><code>text</code>: valor <code>number</code> a partir de la representación de texto. Se usan los formatos de texto comunes ("15", "3423,10", "5.0E-10"). Para más información, vea <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 para <code>true</code>, 0 para <code>false</code>.</li>        <li><code>datetime</code>: número de punto flotante de doble precisión que contiene un equivalente de fecha de automatización OLE.</li>        <li><code>datetimezone</code>: número de punto flotante de doble precisión que contiene un equivalente de fecha de automatización OLE de la fecha y hora locales <code>value</code>.</li>        <li><code>date</code>: número de punto flotante de doble precisión que contiene un equivalente de fecha de automatización OLE.</li>        <li><code>time</code>: expresado en días fraccionarios.</li>        <li><code>duration</code>: expresado en días enteros y fraccionarios.</li>      </ul>Si <code>value</code> es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1 
Obtener el valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obtener el valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Obtenga el valor &lt;code&gt;numérico&lt;/code&gt; de &lt;code&gt;&#34;12,3 %&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
