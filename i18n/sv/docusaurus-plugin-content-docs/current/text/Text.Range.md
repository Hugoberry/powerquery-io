---
title: Text.Range
---

# Text.Range


Returnerar delsträngen vid en förskjutning.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Returnerar delsträngen från texten <code>text</code> vid förskjutningen <code>offset</code>.    En valfri parameter, <code>count</code>, kan tas med för att ange hur många tecken som ska returneras. Returnerar ett fel om det inte finns tillräckligt med tecken.


## Examples

### Example #1 
Hitta delsträngen från texten &#34;Hello World&#34; med början vid index 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Hitta delsträngen från texten &#34;Hello World Hello&#34; med början vid index 6 och med en längd på 5 tecken.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
