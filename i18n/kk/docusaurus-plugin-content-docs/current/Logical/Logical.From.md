---
title: Logical.From
---

# Logical.From


## Description

Көрсетілген мәннен логикалық мәнді жасайды.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Берілген <code>value</code> ішінен <code>logical</code> мәнін қайтарады. Егер берілген <code>value</code> <code>null</code> болса, <code>Logical.From</code> <code>null</code> мәнін қайтарады.  Егер берілген <code>value</code> <code>logical</code> болса, <code>value</code> қайтарылады. Келесі түрлердің мәндерін <code>logical</code> мәніне түрлендіруге болады:      <ul>        <li><code>text</code>: мәтіндік мәннен алынған <code>logical</code> мәні, <code>"true"</code> немесе <code>"false"</code>. Қосымша мәліметтерді <code>Logical.FromText</code> бөлімінен қараңыз.</li>        <li><code>number</code>: <code>value</code> <code>0</code> тең болса, <code>false</code>, олай болмаса, <code>true</code>.</li>      </ul>Егер <code>value</code> кез келген басқа түрге жатса, қате қайтарылады.


## Examples

### Example #1 
&lt;code&gt;2&lt;/code&gt; мәнін &lt;code&gt;logical&lt;/code&gt; мәніне түрлендіру.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
