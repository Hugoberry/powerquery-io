---
title: Text.PadStart
---

# Text.PadStart


Көрсетілген мәтіннің басын толықтыру арқылы көрсетілген ұзындығы бар мәтінді қайтарады.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

`text` мәтіндік мәнінің басында бос орындарды кірістіру арқылы `count` ұзындығына дейін толықтыру арқылы `text` мәнін қайтарады. Толықтыру үшін пайдаланылатын таңбаны көрсету арқылы `character` міндетті емес таңбасын көрсетуге болады. Әдепкі толықтыру таңбасы — бос орын.


## Examples

### Example #1
Мәтіндік мәннің басын ұзындығы 10 таңба болатындай толықтыру.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Мәтіндік мәннің басын ұзындығы 10 таңба болатындай "|" таңбасымен толықтыру.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
