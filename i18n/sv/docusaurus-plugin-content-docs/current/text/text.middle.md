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

Returnerar `count` tecken, eller genom slutet av `text`, vid förskjutningen `start`.


## Examples

### Example #1
Sök efter delsträngen från texten "Hej allihop" som startar vid index 6 och sträcker sig över 5 tecken.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Sök efter delsträngen från texten "Hej allihop" som startar vid index 6 och hela vägen mot slutet.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Leta reda på delsträngen från texten "Hello World" med början vid index 0 som sträcker sig över 2 tecken.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
