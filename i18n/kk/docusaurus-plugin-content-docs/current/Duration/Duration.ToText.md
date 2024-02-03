---
title: Duration.ToText
---

# Duration.ToText


## Description

&#34;к.с:м:с&#34; түріндегі мәтінді қайтарады.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Берілген <code>duration</code> ұзақтық мәнінің "day.hour:mins:sec" формасындағы мәтіндік көрінісін қайтарады. <ul>        <li><code>duration</code>: мәтіндік көрініс есептелетін <code>ұзақтық</code>.</li>  <li><code>format</code>: <i>[Қосымша]</i> Ұсынылмаған, бос мән болмаса, қатені береді</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; мәнін мәтіндік мәнге түрлендіру.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
