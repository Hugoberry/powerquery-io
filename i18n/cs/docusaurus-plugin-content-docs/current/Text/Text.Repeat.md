---
title: Text.Repeat
---

# Text.Repeat


## Description

Vrátí textovou hodnotu složenou ze vstupního textu opakovaného tolikrát, kolikrát je určeno.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Vrátí textovou hodnotu složenou ze vstupního textu <code>text</code> opakovaného <code>count</code>x.


## Examples

### Example #1 
Pětkrát opakuje text „a“.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Třikrát opakuje text „helloworld“.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
