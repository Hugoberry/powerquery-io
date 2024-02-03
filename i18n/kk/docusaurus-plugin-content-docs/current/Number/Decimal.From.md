---
title: Decimal.From
---

# Decimal.From


## Description

Берілген мәннен ондық сан жасайды.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Берілген <code>value</code> мәнінен Decimal <code>number</code> мәнін қайтарады. Егер берілген <code>value</code> <code>null</code> болса, <code>Decimal.From</code> <code>null</code> мәнін қайтарады. Егер берілген <code>value</code> Decimal ауқымындағы <code>number</code> болса, <code>value</code> қайтарылады, әйтпесе қате қайтарылады. Егер <code>value</code> басқа кез келген түрде болса, ол алдымен <code>Number.FromText</code> көмегімен <code>number</code> мәніне түрлендіріледі. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;4.5&#34;&lt;/code&gt; ондық &lt;code&gt;санын&lt;/code&gt; алыңыз.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
