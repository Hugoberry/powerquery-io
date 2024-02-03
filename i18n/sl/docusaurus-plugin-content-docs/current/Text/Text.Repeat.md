---
title: Text.Repeat
---

# Text.Repeat


## Description

Vrne besedilno vrednost, sestavljeno iz vhodnega besedila, ki se ponovi tolikokrat, kot je navedeno.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Vrne besedilno vrednost, sestavljeno iz vhodnega besedila <code>text</code>, ki se ponovi <code>count</code>-krat.


## Examples

### Example #1 
Petkrat ponovite besedilo &#34;a&#34;.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Trikrat ponovite besedilo &#34;helloworld&#34;.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
