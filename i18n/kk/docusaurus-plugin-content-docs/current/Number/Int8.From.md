---
title: Int8.From
---

# Int8.From


## Description

Берілген мәннен белгіленген 8 биттік бүтін сан жасайды.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Берілген <code>value</code> мәнінен белгіленген 8 биттік бүтін <code>сан</code> мәнін қайтарады. Егер берілген <code>value</code> мәні <code>null</code> болса, <code>Int8.From</code> <code>null</code> мәнін қайтарады. Егер берілген <code>value</code> мәні бөлшегі жоқ белгіленген 8 биттік бүтін сан ауқымындағы <code>number</code> болса, <code>value</code> қайтарылады. Егер оның бөлшек саны болса, ол сан көрсетілген режиммен дөңгелектеледі. Әдепкі дөңгелектеу режимі – <code>RoundingMode.ToEven</code>. Егер <code>value</code> мәні басқа түрге жататын болса, алдымен ол <code>Number.FromText</code> көмегімен <code>number</code> мәніне түрлендіріледі. Қолжетімді дөңгелектеу режимдері үшін <code>Number.Round</code> мәнін қараңыз. Қосымша <code>culture</code> мәні берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; белгіленген 8 биттік бүтін &lt;code&gt;сан&lt;/code&gt; мәнін алыңыз .
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; пайдалана отырып, &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; белгіленген 8 биттік бүтін &lt;code&gt;сан&lt;/code&gt; мәнін алыңыз.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting