---
title: Date.From
---

# Date.From


## Description

Crea una data a partir del valor donat.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Retorna un valor <code>date</code> a partir del valor <code>value</code> proporcionat. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Date.From</code> retorna <code>null</code>. Si el valor <code>value</code> proporcionat és <code>date</code>, es retorna <code>value</code>. Els valors dels tipus que s'indiquen a continuació es poden convertir en un valor <code>date</code>:      <ul>        <li><code>text</code>: un valor <code>date</code> a partir d'una representació textual. Consulteu <code>Date.FromText</code> per obtenir-ne informació.</li>        <li><code>datetime</code>: component de data del valor <code>value</code>.</li>        <li><code>datetimezone</code>: component de data de l'equivalent del datetime local del valor <code>value</code>.</li>        <li><code>number</code>: component de data de l'equivalent del datetime de la data d'automatització OLE expressada per l'element <code>value</code>.</li>      </ul>Si el valor <code>value</code> és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1 
Converteix &lt;code&gt;43910&lt;/code&gt; en un valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Converteix &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; en un valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
