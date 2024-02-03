---
title: Text.Repeat
---

# Text.Repeat


## Description

Retourneert een tekstwaarde die bestaat uit de invoertekst en die een bepaalde aantal malen wordt herhaald.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Retourneert een tekstwaarde die bestaat uit de invoertekst <code>text</code> en die <code>count</code> malen wordt herhaald.


## Examples

### Example #1 
De tekst &#34;een&#34; vijf keer herhalen.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
De tekst &#34;hallowereld&#34; drie keer herhalen.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
