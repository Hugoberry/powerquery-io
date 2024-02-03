---
title: Currency.From
---

# Currency.From


## Description

Берілген мәннен валюта мәнін қайтарады.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Берілген <code>value</code> мәнінен <code>currency</code> мәнін қайтарады. Егер берілген <code>value</code> мәні <code>null</code> болса, <code>Currency.From</code> <code>null</code> мәнін қайтарады. Егер берілген <code>value</code> мәні валюта ауқымындағы <code>number</code> болса, <code>value</code> мәнінің бөлшек бөлігі 4 ондық цифрға дөңгелектеліп, қайтарылады. Егер <code>value</code> басқа кез келген түрде болса, ол алдымен <code>Number.FromText</code> көмегімен <code>number</code> мәніне түрлендіріледі. Валюта үшін жарамды ауқым <code>-922,337,203,685,477.5808</code> - <code>922,337,203,685,477.5807</code> болып табылады. Қолжетімді дөңгелектеу режимдері үшін <code>Number.Round</code> қараңыз. Әдепкі мән <code>RoundingMode.ToEven</code> болып табылады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;1,23455&#34;&lt;/code&gt; мәнінің &lt;code&gt;валюта&lt;/code&gt; мәнін алыңыз.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
&lt;code&gt;RoundingMode.Down&lt;/code&gt; көмегімен &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; &lt;code&gt;валюта&lt;/code&gt; мәнін алыңыз.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
