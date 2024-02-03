---
title: Text.Repeat
---

# Text.Repeat


## Description

Returnerer en tekstværdi, der består af inputteksten gentaget et angivet antal gange.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Returnerer en tekstværdi, der består af inputteksten <code>text</code> gentaget <code>count</code> gange.


## Examples

### Example #1 
Gentag teksten &#34;a&#34; fem gange.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Gentag teksten &#34;helloworld&#34; tre gange.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
