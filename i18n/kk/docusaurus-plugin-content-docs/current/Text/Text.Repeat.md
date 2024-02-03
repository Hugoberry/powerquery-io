---
title: Text.Repeat
---

# Text.Repeat


## Description

Көрсетілген рет қайталанатын кіріс мәтіннен тұратын мәтіндік мәнді қайтарады.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

<code>count</code> рет қайталанатын <code>text</code> кіріс мәтінінен тұратын мәтіндік мәнді қайтарады.


## Examples

### Example #1 
&#34;a&#34; мәтінін бес рет қайталау.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
&#34;сәлемәлем&#34; мәтінін үш рет қайталау.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
