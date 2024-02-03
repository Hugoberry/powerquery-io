---
title: Single.From
---

# Single.From


## Description

Берілген мәннен Single мәнін жасайды.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Берілген <code>value</code> мәнінен Single <code>number</code> мәнін қайтарады. Егер берілген <code>value</code> <code>null</code> болса, <code>Single.From</code> <code>null</code> мәнін қайтарады. Егер берілген <code>value</code> Single ауқымындағы <code>number</code> болса, <code>value</code> қайтарылады, әйтпесе қате қайтарылады. Егер <code>value</code> басқа кез келген түрде болса, ол алдымен <code>Number.FromText</code> көмегімен <code>number</code> мәніне түрлендіріледі. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;1.5&#34;&lt;/code&gt; Single &lt;code&gt;сан&lt;/code&gt; мәнін алыңыз.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
