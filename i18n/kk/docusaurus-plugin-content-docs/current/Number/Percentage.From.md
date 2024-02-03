---
title: Percentage.From
---

# Percentage.From


## Description

Берілген мәннің пайыздық мәнін қайтарады.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Берілген <code>value</code> мәнінен <code>percentage</code> мәнін қайтарады. Егер берілген <code>value</code> болса, <code>null</code>, <code>Percentage.From</code> <code>null</code> мәнін қайтарады. Егер берілген <code>value</code> соңында пайыз таңбасы бар<code>text</code> болса, түрлендірілген ондық сан қайтарылады. Әйтпесе, бұл мән <code>Number.From</code> көмегімен <code>number</code> мәніне түрлендіріледі.  Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;12,3%&#34;&lt;/code&gt; үшін &lt;code&gt;пайыздық&lt;/code&gt; мәнді алыңыз.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
