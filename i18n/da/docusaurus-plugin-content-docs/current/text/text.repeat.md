---
title: Text.Repeat
---

# Text.Repeat


Returnerer en tekstværdi, der består af inputteksten gentaget et angivet antal gange.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Returnerer en tekstværdi, der består af inputteksten `text` gentaget `count` gange.


## Examples

### Example #1
Gentag teksten "a" fem gange.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Gentag teksten "helloworld" tre gange.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
