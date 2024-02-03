---
title: Number.From
---

# Number.From


## Description

Осы мәннен санды жасайды.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Берілген <code>value</code> мәнінен <code>number</code> мәнін қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").Егер берілген <code>value</code> <code>null</code> болса, <code>Number.From</code> <code>null</code> мәнін қайтарады. Егер берілген <code>value</code> <code>number</code> болса, <code>value</code> қайтарылады. Келесі түрлерегі мәндерді <code>number</code> мәніне түрлендіруге болады:      <ul>        <li><code>text</code>: мәтіндік көріністен алынған <code>number</code> мәні. Жалпы мәтіндік пішімдер өңделеді ("15", "3423,10", "5.0E-10"). Мәліметтерді алу үшін <code>Number.FromText</code> қараңыз.</li>        <li><code>logical</code>: 1 <code>true</code> үшін, 0 <code>false</code> үшін.</li>        <li><code>datetime</code>: OLE автоматтандыру күнінің баламасын қамтитын қос дәлдігі бар қалқымалы нүктесі бар сан.</li>        <li><code>datetimezone</code>: <code>value</code> жергілікті күні мен уақытының OLE автоматтандыру күнінің баламасын қамтитын қос дәлдігі бар жылжымалы үтірі бар сан.</li>        <li><code>date</code>: OLE автоматтандыру күнінің баламасын қамтитын қос дәлдігі бар жылжымалы үтірі бар сан.</li>        <li><code>time</code>:  бөлшек күндер түрінде көрсетіледі.</li>        <li><code>duration</code>: бүтін және бөлшек күндер түрінде көрсетіледі.</li>      </ul>Егер <code>value</code> кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; мәнінің &lt;code&gt;number&lt;/code&gt; мәнін алу.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; мәнінің &lt;code&gt;number&lt;/code&gt; мәнін алу.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
&lt;code&gt;&#34;12,3%&#34;&lt;/code&gt; үшін &lt;code&gt;сандық&lt;/code&gt; мәнді алыңыз.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
