---
title: Text.Repeat
---

# Text.Repeat


## Description

Returnează o valoare text compusă din textul de intrare repetat de un număr specificat de ori.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Returnează o valoare text compusă din textul de intrare <code>text</code> repetat de <code>count</code> ori.


## Examples

### Example #1 
Repetaţi textul „a” de cinci ori.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Repetaţi textul „helloworld” de trei ori.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
