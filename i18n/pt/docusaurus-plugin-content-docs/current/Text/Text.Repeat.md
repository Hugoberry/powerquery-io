---
title: Text.Repeat
---

# Text.Repeat


## Description

Returns a text value composed of the input text repeated a specified number of times.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Returns a text value composed of the input text <code>text</code> repeated <code>count</code> times.


## Examples

### Example #1 
Repeat the text &#34;a&#34; five times.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Repeat the text &#34;helloworld&#34; three times.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
