---
title: Text.Repeat
---

# Text.Repeat


Zwraca wartość tekstową składającą się z teksu wejściowego powtórzonego określoną liczbę razy.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Zwraca wartość tekstową składającą się z teksu wejściowego <code>text</code> powtórzonego <code>count</code> razy.


## Examples

### Example #1 
Powtórz tekst „a” pięć razy.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Powtórz tekst „helloworld” trzy razy.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
