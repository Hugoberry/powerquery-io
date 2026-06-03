---
title: Text.Repeat
---

# Text.Repeat


Retourneert een tekstwaarde die bestaat uit de invoertekst en die een bepaalde aantal malen wordt herhaald.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Retourneert een tekstwaarde die bestaat uit de invoertekst `text` en die `count` malen wordt herhaald.


## Examples

### Example #1
De tekst "een" vijf keer herhalen.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
De tekst "hallowereld" drie keer herhalen.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
