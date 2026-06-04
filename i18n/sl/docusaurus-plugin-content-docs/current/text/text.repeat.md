---
title: Text.Repeat
---

# Text.Repeat


Vrne besedilno vrednost, sestavljeno iz vhodnega besedila, ki se ponovi tolikokrat, kot je navedeno.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Vrne besedilno vrednost, sestavljeno iz vhodnega besedila `text`, ki se ponovi `count`\-krat.


## Examples

### Example #1
Petkrat ponovite besedilo"a".
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Trikrat ponovite besedilo"helloworld".
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
