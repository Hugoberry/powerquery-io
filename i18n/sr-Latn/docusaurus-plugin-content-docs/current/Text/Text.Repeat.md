---
title: Text.Repeat
---

# Text.Repeat


## Description

Vraća tekstualnu vrednost koja se sastoji od ulaznog teksta ponovljenog navedeni broj puta.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Vraća tekstualnu vrednost koja se sastoji od ulaznog teksta <code>text</code> ponovljenog <code>count</code> puta.


## Examples

### Example #1 
Ponavljanje teksta „a“ pet puta.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Ponavljanje teksta „helloworld“ tri puta.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
