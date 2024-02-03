---
title: Int32.From
---

# Int32.From


## Description

Берілген мәннен 32 биттік бүтін сан жасайды.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Берілген <code>value</code> мәнінен 32 биттік бүтін <code>сан</code> мәнін қайтарады. Егер берілген <code>value</code> мәні <code>null</code> болса, <code>Int32.From</code> <code>null</code> мәнін қайтарады. Егер берілген <code>value</code> мәні бөлшегі жоқ 32 биттік бүтін сан ауқымындағы <code>number</code> болса, <code>value</code> қайтарылады. Егер оның бөлшек саны болса, ол сан көрсетілген режиммен дөңгелектеледі. Әдепкі дөңгелектеу режимі – <code>RoundingMode.ToEven</code>. Егер <code>value</code> мәні басқа түрге жататын болса, алдымен ол <code>Number.FromText</code> көмегімен <code>number</code> мәніне түрлендіріледі. Қолжетімді дөңгелектеу режимдері үшін <code>Number.Round</code> мәнін қараңыз. Қосымша <code>culture</code> мәні берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; &lt;code&gt;сан&lt;/code&gt; мәнінің 32 биттік бүтін санын алыңыз.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; пайдалана отырып, &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; 32 биттік бүтін &lt;code&gt;сан&lt;/code&gt; мәнін алыңыз.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
