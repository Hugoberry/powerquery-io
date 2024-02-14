---
title: DateTime.From
---

# DateTime.From


Crea un elemento datetime dal valore specificato.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Restituisce un valore <code>datetime</code> dall'elemento <code>value</code> specificato. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".Se l'elemento specificato <code>value</code> è <code>null</code>, <code>DateTime.From</code> restituisce <code>null</code>. Se l'elemento specificato <code>value</code> è <code>datetime</code>, viene restituito <code>value</code>. I valori dei tipi seguenti possono essere convertiti in un valore <code>datetime</code>:      <ul>        <li><code>text</code>: valore <code>datetime</code> dalla rappresentazione testuale. Per informazioni, vedere <code>DateTime.FromText</code>.</li>        <li><code>date</code>: elemento <code>datetime</code> con <code>value</code> come componente di data e <code>12:00:00 AM</code> come componente di ora.</li>        <li><code>datetimezone</code>: elemento <code>datetime</code> locale equivalente a <code>value</code>.</li>        <li><code>time</code>: elemento <code>datetime</code> con l'equivalente data della data di automazione OLE di <code>0</code> come componente di data e <code>value</code> come componente di ora.</li>        <li><code>numero</code>: equivalente <code>datetime</code> della data di automazione OLE espressa da <code>value</code>. </li>      </ul>Se <code>value</code> è di altro tipo, viene restituito un errore.


## Examples

### Example #1 
Converte &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; in un valore &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Converte &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; in un valore &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
