---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Көрсетілген мәтіннің соңын толықтыру арқылы көрсетілген ұзындығы бар мәтінді қайтарады.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

<code>text</code> мәтіндік мәнінің соңында бос орындарды кірістіру арқылы <code>count</code> ұзындығына дейін толықтыру арқылы <code>text</code> мәнін қайтарады.    Толықтыру үшін пайдаланылатын таңбаны көрсету арқылы <code>character</code> міндетті емес таңбасын көрсетуге болады. Әдепкі толықтыру таңбасы — бос орын.


## Examples

### Example #1 
Мәтіндік мәннің соңын ұзындығы 10 таңба болатындай толықтыру.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Мәтіндік мәннің соңын ұзындығы 10 таңба болатындай &#34;|&#34; таңбасымен толықтыру.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
