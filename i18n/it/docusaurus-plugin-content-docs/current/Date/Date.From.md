---
title: Date.From
---

# Date.From


## Description

Crea un data dal valore specificato.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Restituisce un valore <code>date</code> dall'elemento <code>value</code> specificato. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".Se l'elemento specificato <code>value</code> è <code>null</code>, <code>Date.From</code> restituisce <code>null</code>. Se l'elemento specificato <code>value</code> è <code>date</code>, viene restituito <code>value</code>. I valori dei tipi seguenti possono essere convertiti in un valore <code>date</code>:      <ul>        <li><code>text</code>: valore <code>date</code> dalla rappresentazione testuale. Per informazioni, vedere <code>Date.FromText</code>.</li>        <li><code>datetime</code>: componente date di <code>value</code>.</li>        <li><code>datetimezone</code>: componente date dell'equivalente datetime locale di <code>value</code>.</li>        <li><code>number</code>: componente date dell'equivalente datetime della data di automazione OLE espressa da <code>value</code>.</li>      </ul>Se <code>value</code> è di altro tipo, viene restituito un errore.


## Examples

### Example #1 
Converte &lt;code&gt;43910&lt;/code&gt; in un valore &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Converte &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; in un valore &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
