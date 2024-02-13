---
title: Single.From
---

# Single.From


Crea un valore Single dal valore specificato.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Restituisce un valore Single <code>numero</code> dal dato <code>value</code>. Se il dato<code>value</code> è <code>null</code>, <code>Single.From</code> restituisce <code>null</code>.  Se il dato <code>value</code> si trova nell’intervallo di Single <code>numero</code>, <code>value</code> viene restituito, in caso contrario, viene restituito un errore. Se <code>value</code> è di qualsiasi altro tipo, verrà prima convertito in un <code>numero</code> usando <code>Number.FromText</code>. È anche possibile specificare <code>culture</code> facoltativo (ad esempio "en-US").


## Examples

### Example #1 
Ottenere il valore &lt;code&gt;number&lt;/code&gt; Single di &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
