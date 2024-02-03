---
title: Text.Repeat
---

# Text.Repeat


## Description

Tiek atgriezta teksta vērtība, kas veidota no ievades teksta, kas tiek atkārtots noteiktu reižu skaitu.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Tiek atgriezta teksta vērtība, kas veidota no ievades teksta <code>text</code>, kas atkārtots <code>count</code> reizes.


## Examples

### Example #1 
Atkārtojiet tekstu a piecas reizes.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Atkārtojiet tekstu helloworld trīs reizes.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
