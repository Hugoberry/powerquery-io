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

Returnerar ett textvärde bestående av indatatexten `text` som upprepas `count` gånger.


## Examples

### Example #1
Upprepa texten "a" fem gånger.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Upprepa texten "helloworld" tre gånger.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
