---
title: Currency.From
---

# Currency.From


## Description

Crea un valore di valuta dal valore specificato.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Restituisce un valore <code>valuta</code> dal dato <code>value</code>. Se il dato <code>value</code> è <code>null</code>, <code>Currency.From</code> restituisce <code>null</code>.  Se il dato <code>value</code> è <code>numero</code> compreso nell'intervallo della valuta, la parte frazionaria di <code>value</code> viene arrotondata a 4 decimali e quindi viene restituito il valore. Se <code>value</code> è di qualsiasi altro tipo, verrà prima convertito in un <code>numero</code> usando <code>Number.FromText</code>. L'intervallo valido per la valuta è da <code>-922.337.203.685,477,5808</code> a <code>922.337.203.685.477,5807</code>. Per le modalità di arrotondamento disponibili, vedere <code>Number.Round</code>. L'impostazione predefinita è <code>RoundingMode.ToEven</code>. Può essere previsto anche un <code>culture</code> opzionale (per esempio, "it-IT").


## Examples

### Example #1 
Ottiene il valore &lt;code&gt;currency&lt;/code&gt; di &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Ottenere il &lt;code&gt;currency&lt;/code&gt; valore di &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; usando &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
