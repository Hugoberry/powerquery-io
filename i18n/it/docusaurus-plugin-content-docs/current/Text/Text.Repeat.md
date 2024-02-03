---
title: Text.Repeat
---

# Text.Repeat


## Description

Restituisce un valore di testo composto dal testo di input ripetuto per il numero di volte specificato.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Restituisce un valore di testo composto dal testo di input <code>text</code> ripetuto per <code>count</code> volte.


## Examples

### Example #1 
Ripetere il testo &#34;a&#34; cinque volte.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Ripetere il testo &#34;helloworld&#34; tre volte.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
