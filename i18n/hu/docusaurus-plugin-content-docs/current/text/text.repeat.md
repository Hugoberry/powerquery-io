---
title: Text.Repeat
---

# Text.Repeat


Egy olyan szöveges értéket ad vissza, amely a bemeneti szöveg adott számú ismétlődéséből áll.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Egy olyan szöveges értéket ad vissza, amely a bemeneti `text` szöveg `count` ismétlődéséből áll.


## Examples

### Example #1
Az „a” szöveg megismétlése ötször
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
A „helloworld” szöveg megismétlése háromszor
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
