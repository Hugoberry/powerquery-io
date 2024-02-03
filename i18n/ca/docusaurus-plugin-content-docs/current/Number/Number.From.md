---
title: Number.From
---

# Number.From


## Description

Crea un nombre a partir del valor donat.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Retorna un valor <code>number</code> a partir del valor <code>value</code> proporcionat. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Number.From</code> retorna <code>null</code>. Si el valor <code>value</code> proporcionat és <code>number</code>, es retorna el valor <code>value</code>. Els valors dels tipus següents es poden convertir en un valor <code>number</code>:      <ul>        <li><code>text</code>: un valor <code>number</code> d'una representació textual. Els formats de text comuns es gestionen ("15", "3,423.10", "5.0E-10"). Consulteu <code>Number.FromText</code> per obtenir-ne informació.</li>        <li><code>logical</code>: 1 per a <code>true</code>, 0 per a <code>false</code>.</li>        <li><code>datetime</code>: nombre de punt flotant de doble precisió que conté un equivalent de data d'automatització OLE.</li>        <li><code>datetimezone</code>: nombre de punt flotant de doble precisió que conté un equivalent de data d'automatització OLE de la data i hora locals de l'element <code>value</code>.</li>        <li><code>date</code>: nombre de punt flotant de doble precisió que conté un equivalent de data d'automatització OLE.</li>        <li><code>time</code>: expressat en dies fraccionaris.</li>        <li><code>duration</code>: expressat en dies complets i fraccionaris.</li>      </ul>Si el valor <code>value</code> és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1 
Obté el valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obté el valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Obteniu el valor &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
