---
title: Time.From
---

# Time.From


Crea un&#39;ora dal valore specificato.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Restituisce un valore <code>time</code> dall'elemento <code>value</code> specificato. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".Se l'elemento specificato <code>value</code> è <code>null</code>, <code>Time.From</code> restituisce <code>null</code>. Se l'elemento specificato <code>value</code> è <code>time</code>, viene restituito <code>value</code>. I valori dei tipi seguenti possono essere convertiti in un valore <code>time</code>:      <ul>        <li><code>text</code>: valore <code>time</code> dalla rappresentazione testuale. Per informazioni, vedere <code>Time.FromText</code>.</li>        <li><code>datetime</code>: componente ora di <code>value</code>.</li>        <li><code>datetimezone</code>: componente ora dell'equivalente datetime locale di <code>value</code>.</li>        <li><code>number</code>: elemento <code>time</code> equivalente al numero di giorni frazionari espressi da <code>value</code>. Se <code>value</code> è negativo o maggiore o uguale a 1, viene restituito un errore.</li>      </ul>Se <code>value</code> è di altro tipo, viene restituito un errore.


## Examples

### Example #1 
Converte &lt;code&gt;0.7575&lt;/code&gt; in un valore &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Converte &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; in un valore &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
