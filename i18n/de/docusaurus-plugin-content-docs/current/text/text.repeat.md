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

Gibt einen Textwert zurück, der `count` Wiederholungen des Eingabetexts "`text`" enthält.


## Examples

### Example #1
Wiederholt den Text "a" fünf Mal.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Wiederholt den Text "helloworld" drei Mal.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
