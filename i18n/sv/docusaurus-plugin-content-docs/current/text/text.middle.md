---
title: Text.Middle
---

# Text.Middle


Returnerar delsträngen upp till en viss längd.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Returnerar <code>count</code> tecken, eller genom slutet av <code>text</code>, vid förskjutningen <code>start</code>.


## Examples

### Example #1 
Sök efter delsträngen från texten &#34;Hej allihop&#34; som startar vid index 6 och sträcker sig över 5 tecken.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Sök efter delsträngen från texten &#34;Hej allihop&#34; som startar vid index 6 och hela vägen mot slutet.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
