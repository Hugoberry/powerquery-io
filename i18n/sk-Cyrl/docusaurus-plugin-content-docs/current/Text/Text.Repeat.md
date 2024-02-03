---
title: Text.Repeat
---

# Text.Repeat


## Description

Vráti textovú hodnotu zostavenú zo vstupného textu so zadaným počtom opakovaní.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Vráti textovú hodnotu zostavenú zo vstupného textu <code>text</code> opakovanú <code>count</code>-krát.


## Examples

### Example #1 
Zopakujte text &#34;a&#34; päťkrát.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Zopakujte text &#34;helloworld&#34; trikrát.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
