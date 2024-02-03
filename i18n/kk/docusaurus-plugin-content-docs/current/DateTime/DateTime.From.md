---
title: DateTime.From
---

# DateTime.From


## Description

Осы мәннен күнді және уақытты жасайды.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Берілген <code>value</code> мәнінен <code>datetime</code> мәнін қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").Егер берілген <code>value</code> <code>null</code> болса, <code>DateTime.From</code> <code>null</code> мәнін қайтарады.  Егер берілген <code>value</code> <code>datetime</code> болса, <code>value</code> қайтарылады. Келесі түрлердегі мәндерді <code>datetime</code> мәніне түрлендіруге болады:      <ul>        <li><code>text</code>: мәтіндік көріністен алынған <code>datetime</code> мәні. Мәліметтер алу үшін <code>DateTime.FromText</code> қараңыз.</li>        <li><code>date</code>: <code>datetime</code>, <code>value</code> күн компоненті және <code>12:00:00 AM</code> уақыт компоненті болып табылады.</li>        <li><code>datetimezone</code>: <code>value</code> жергілікті <code>datetime</code> баламасы.</li>        <li><code>time</code>: <code>datetime</code>, <code>0</code> OLE автоматтандыру күнінің күн баламасы күн компоненті және <code>value</code> уақыт компоненті болып табылады.</li>        <li><code>number</code>: <code>value</code> арқылы көрсетілген OLE автоматтандыру күнінің <code>datetime</code> баламасы. </li>      </ul>Егер <code>value</code> кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1 
&lt;code&gt;#time(06, 45, 12)&lt;/code&gt; мәнін &lt;code&gt;datetime&lt;/code&gt; мәніне түрлендіру.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
&lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; мәнін &lt;code&gt;datetime&lt;/code&gt; мәніне түрлендіру.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
