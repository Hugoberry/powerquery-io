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

Returnerar delsträngen från texten `text` vid förskjutningen `offset`. En valfri parameter, `count`, kan tas med för att ange hur många tecken som ska returneras. Genererar ett fel om det inte finns tillräckligt med tecken.


## Examples

### Example #1
Hitta delsträngen från texten "Hello World" med början vid index 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Hitta delsträngen från texten "Hello World Hello" med början vid index 6 och med en längd på 5 tecken.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
