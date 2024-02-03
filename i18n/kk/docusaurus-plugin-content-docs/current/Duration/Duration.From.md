---
title: Duration.From
---

# Duration.From


## Description

Осы мәннен ұзақтықты жасайды.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Берілген <code>value</code> ішінен <code>duration</code> мәнін қайтарады. Егер берілген <code>value</code> <code>null</code> болса, <code>Duration.From</code> <code>null</code> мәнін қайтарады.  Егер берілген <code>value</code> <code>duration</code> болса, <code>value</code> қайтарылады. Келесі түрлердің мәндерін <code>duration</code> мәніне түрлендіруге болады:      <ul>        <li><code>text</code>: мәтіндік өткен уақыт түрінен (к.с:м:с) алынған <code>duration</code> мәні. Қосымша мәліметтерді <code>Duration.FromText</code> бөлімінен қараңыз.</li>        <li><code>number</code>: <code>value</code> арқылы көрсетілген бүтін және бөлшек күндердің санының <code>duration</code> баламасы.</li>      </ul>Егер <code>value</code> кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1 
&lt;code&gt;2.525&lt;/code&gt; мәнін &lt;code&gt;duration&lt;/code&gt; мәніне түрлендіру.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
