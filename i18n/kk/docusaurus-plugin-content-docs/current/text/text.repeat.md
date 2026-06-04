---
title: Text.Repeat
---

# Text.Repeat


Көрсетілген рет қайталанатын кіріс мәтіннен тұратын мәтіндік мәнді қайтарады.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

`count` рет қайталанатын `text` кіріс мәтінінен тұратын мәтіндік мәнді қайтарады.


## Examples

### Example #1
"a" мәтінін бес рет қайталау.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
"сәлемәлем" мәтінін үш рет қайталау.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
