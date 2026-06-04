---
title: Duration.ToText
---

# Duration.ToText


"к.с:м:с" түріндегі мәтінді қайтарады.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Берілген `duration` ұзақтық мәнінің "day.hour:mins:sec" формасындағы мәтіндік көрінісін қайтарады.

-   `duration`: Мәтіндік көрініс есептелетін `ұзақтық`.
-   `format`: *\[Міндетті емес\]* Ұсынылмаған, бос мән болмаса, қатені береді.


## Examples

### Example #1
`#duration(2, 5, 55, 20)` мәнін мәтіндік мәнге түрлендіру.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
