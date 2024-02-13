---
title: Text.Repeat
---

# Text.Repeat


Gibt einen Textwert mit der angegebenen Anzahl von Wiederholungen des Eingabetexts zurück.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Gibt einen Textwert zurück, der <code>count</code> Wiederholungen des Eingabetexts "<code>text</code>" enthält.


## Examples

### Example #1 
Wiederholt den Text &#34;a&#34; fünf Mal.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Wiederholt den Text &#34;helloworld&#34; drei Mal.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
