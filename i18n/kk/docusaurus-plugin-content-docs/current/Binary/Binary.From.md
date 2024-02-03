---
title: Binary.From
---

# Binary.From


## Description

Осы мәннен екілік файлды жасайды


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Берілген <code>value</code> ішінен <code>binary</code> мәнін қайтарады. Егер берілген <code>value</code> <code>null</code> болса, <code>Binary.From</code> <code>null</code> мәнін қайтарады. Егер берілген <code>value</code> <code>binary</code> болса, <code>value</code> қайтарылады. Келесі түрлердің мәндерін <code>binary</code> мәніне түрлендіруге болады:      <ul>        <li><code>text</code>: мәтіндік көріністегі <code>binary</code> мәні. Қосымша мәліметтерді <code>Binary.FromText</code> бөлімінен қараңыз.</li>      </ul>Егер <code>value</code> кез келген басқа түрге жатса, қате шығады.


## Examples

### Example #1 
&lt;code&gt;&#34;1011&#34;&lt;/code&gt; мәнінің &lt;code&gt;binary&lt;/code&gt; мәнін алу.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
