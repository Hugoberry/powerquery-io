---
title: Date.From
---

# Date.From


## Description

Осы мәннен күнді жасайды.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Берілген <code>value</code> мәнінен <code>date</code> мәнін қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").Егер берілген <code>value</code> <code>null</code> болса, <code>Date.From</code> <code>null</code> мәнін қайтарады.  Егер берілген <code>value</code> <code>date</code> болса, <code>value</code> қайтарылады. Келесі түрлердегі мәндерді <code>date</code> мәніне түрлендіруге болады:      <ul>        <li><code>text</code>: мәтіндік көріністен алынған <code>date</code> мәні. Мәліметтерді алу үшін <code>Date.FromText</code> қараңыз.</li>        <li><code>datetime</code>: <code>value</code> мәнінің күн компоненті.</li>        <li><code>datetimezone</code>: <code>value</code> жергілікті күн/уақыт баламасының күн компоненті.</li>        <li><code>number</code>: <code>value</code> арқылы көрсетілген OLE автоматтандыру күнінің күн/уақыт баламасының күн компоненті.</li>      </ul>Егер <code>value</code> кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1 
&lt;code&gt;43910&lt;/code&gt; мәнін &lt;code&gt;date&lt;/code&gt; мәніне түрлендіру.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; мәнін &lt;code&gt;date&lt;/code&gt; мәніне түрлендіру.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
