---
title: Decimal.From
---

# Decimal.From


## Description

Crea un valore Decimal dal valore specificato.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Restituisce un valore Decimale <code>numero</code> dal dato <code>value</code>. Se il dato<code>value</code> è <code>null</code>, <code>Decimale.From</code> restituisce <code>null</code>.  Se il dato <code>value</code> si trova nell’intervallo di Decimale <code>numero</code>, <code>value</code> viene restituito, in caso contrario, viene restituito un errore. Se <code>value</code> è di qualsiasi altro tipo, verrà prima convertito in un <code>numero</code> usando <code>Number.FromText</code>. È anche possibile specificare <code>culture</code> facoltativo (ad esempio "en-US").


## Examples

### Example #1 
Ottenere il valore &lt;code&gt;number&lt;/code&gt; Decimal di &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
