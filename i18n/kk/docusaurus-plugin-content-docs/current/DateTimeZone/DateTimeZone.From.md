---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Осы мәннен күнді және уақыт белдеуін жасайды.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Берілген <code>value</code> мәнінен <code>datetimezone</code> мәнін қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").Егер берілген <code>value</code> <code>null</code> болса, <code>DateTimeZone.From</code> <code>null</code> мәнін қайтарады.  Егер берілген <code>value</code> <code>datetimezone</code> болса, <code>value</code> қайтарылады. Келесі түрлердегі мәндерді <code>datetimezone</code> мәніне түрлендіруге болады:      <ul>        <li><code>text</code>: мәтіндік көріністен алынған <code>datetimezone</code> мәні. Мәліметтер алу үшін <code>DateTimeZone.FromText</code> қараңыз.</li>        <li><code>date</code>: <code>datetimezone</code>, <code>value</code> күн компоненті, <code>12:00:00 AM</code> уақыт компоненті және жергілікті уақыт белдеуіне сәйкес ауытқу болып табылады.</li>        <li><code>datetime</code>: <code>datetimezone</code>, <code>value</code> күн/уақыт және жергілікті уақыт белдеуіне сәйкес ауытқу болып табылады.</li>        <li><code>time</code>: <code>datetimezone</code>, <code>0</code> OLE автоматтандыру күнінің күн баламасы күн компоненті, <code>value</code> уақыт компоненті және жергілікті уақыт белдеуіне сәйкес ауытқу болып табылады.</li>        <li><code>number</code>: <code>datetimezone</code>, <code>value</code> арқылы көрсетілген OLE автоматтандыру күніне тең күн/уақыт және жергілікті уақыт белдеуіне сәйкес ауытқу бар.</li>      </ul>Егер <code>value</code> кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1 
&lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; мәнін &lt;code&gt;datetimezone&lt;/code&gt; мәніне түрлендіру.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
