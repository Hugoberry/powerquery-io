---
title: Percentage.From
---

# Percentage.From


## Description

Restituisce un valore percentuale dal valore specificato.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Restituisce un valore <code>percentuale</code> dal dato <code>value</code>. Se il dato <code>value</code> è <code>null</code>, <code>Percentage.From</code> restituisce <code>null</code>.  Se il dato <code>value</code> è <code>testo</code> con un simbolo percentuale finale, viene restituito il numero decimale convertito. In caso contrario, il valore viene convertito in un <code>numero</code> usando <code>Number.From</code>. È anche possibile specificare un valore <code>culture</code> opzionale (ad esempio "en-US").


## Examples

### Example #1 
Ottenere il valore &lt;code&gt;percentage&lt;/code&gt; di &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
