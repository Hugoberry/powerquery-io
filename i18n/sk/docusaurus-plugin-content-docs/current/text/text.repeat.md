---
title: Text.Repeat
---

# Text.Repeat


Vráti textovú hodnotu zostavenú zo vstupného textu so zadaným počtom opakovaní.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Vráti textovú hodnotu zostavenú zo vstupného textu `text` opakovanú `count`\-krát.


## Examples

### Example #1
Zopakujte text "a" päťkrát.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Zopakujte text "helloworld" trikrát.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
