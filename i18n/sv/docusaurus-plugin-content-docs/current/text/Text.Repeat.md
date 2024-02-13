---
title: Text.Repeat
---

# Text.Repeat


Returnerar ett textvärde bestående av indatatexten som upprepas angivet antal gånger.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Returnerar ett textvärde bestående av indatatexten <code>text</code> som upprepas <code>count</code> gånger.


## Examples

### Example #1 
Upprepa texten &#34;a&#34; fem gånger.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Upprepa texten &#34;helloworld&#34; tre gånger.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
