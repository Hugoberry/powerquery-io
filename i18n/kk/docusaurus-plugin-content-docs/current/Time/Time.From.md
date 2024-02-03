---
title: Time.From
---

# Time.From


## Description

Осы мәннен уақытты жасайды.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Берілген <code>value</code> мәнінен <code>time</code> мәнін қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").Егер берілген <code>value</code> <code>null</code> болса, <code>Time.From</code> <code>null</code> мәнін қайтарады.  Егер берілген <code>value</code> <code>time</code> болса, <code>value</code> қайтарылады. Келесі түрлердегі мәндерді <code>time</code> мәніне түрлендіруге болады:      <ul>        <li><code>text</code>: мәтіндік көріністен алынған <code>time</code> мәні. Мәліметтерді алу үшін <code>Time.FromText</code> қараңыз.</li>        <li><code>datetime</code>: <code>value</code> мәнінің уақыт компоненті.</li>        <li><code>datetimezone</code>: <code>value</code> жергілікті күн/уақыт баламасының уақыт компоненті.</li>        <li><code>number</code>: <code>time</code> <code>value</code> арқылы көрсетілген бөлшек күндер санының баламасы. Егер <code>value</code> теріс, 1-ден үлкенірек немесе оған тең болса, қате қайтарылады.</li>      </ul>Егер <code>value</code> кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1 
&lt;code&gt;0.7575&lt;/code&gt; мәнін &lt;code&gt;time&lt;/code&gt; мәніне түрлендіру.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; мәнін &lt;code&gt;time&lt;/code&gt; мәніне түрлендіру.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
