---
title: Double.From
---

# Double.From


## Description

Берілген мәнен Double мәнін жасайды.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Берілген <code>value</code> мәнінен Double <code>number</code> мәнін қайтарады. Егер берілген <code>value</code> <code>null</code> болса, <code>Double.From</code> <code>null</code> мәнін қайтарады. Егер берілген <code>value</code> Double ауқымындағы <code>number</code> болса, <code>value</code> қайтарылады, әйтпесе қате қайтарылады. Егер <code>value</code> басқа кез келген түрде болса, ол алдымен <code>Number.FromText</code> көмегімен <code>number</code> мәніне түрлендіріледі. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; Double &lt;code&gt;саны&lt;/code&gt; мәнін алыңыз.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
