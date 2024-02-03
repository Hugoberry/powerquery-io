---
title: Number.From
---

# Number.From


## Description

Crea un numero dal valore specificato.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Restituisce un valore <code>numero</code> dall'elemento <code>value</code> specificato. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".Se l'elemento specificato <code>value</code> è <code>null</code>, <code>Number.From</code> restituisce <code>null</code>. Se l'elemento specificato <code>value</code> è <code>numero</code>, viene restituito <code>value</code>. I valori dei tipi seguenti possono essere convertiti in un valore <code>numero</code>:      <ul>        <li><code>text</code>: valore <code>numero</code> dalla rappresentazione testuale. Vengono gestiti i formati di testo comuni ("15", "3,423.10", "5.0E-10"). Per informazioni, vedere <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 per <code>true</code>, 0 per <code>false</code>.</li>        <li><code>datetime</code>: numero a virgola mobile a precisione doppia contenente un equivalente della data di automazione OLE.</li>        <li><code>datetimezone</code>: numero a virgola mobile a precisione doppia che contiene un equivalente della data di automazione OLE della data e dell'ora locale di <code>value</code>.</li>        <li><code>date</code>: numero a virgola mobile a precisione doppia contenente un equivalente della data di automazione OLE.</li>        <li><code>time</code>: espresso in giorni frazionari.</li>        <li><code>duration</code>: espresso in giorni interi e frazionari.</li>      </ul>Se <code>value</code> è di altro tipo, viene restituito un errore.


## Examples

### Example #1 
Ottenere il valore &lt;code&gt;number&lt;/code&gt; di &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Ottenere il valore &lt;code&gt;number&lt;/code&gt; di &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Ottenere il valore &lt;code&gt;number&lt;/code&gt; di &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
