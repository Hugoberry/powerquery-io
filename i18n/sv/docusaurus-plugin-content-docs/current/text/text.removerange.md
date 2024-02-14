---
title: Text.RemoveRange
---

# Text.RemoveRange


Tar bort ett antal tecken med början vid den angivna förskjutningen


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Returnerar en kopia av textvärdet <code>text</code> där alla tecken från position <code>offset</code> har tagits bort.    En valfri parameter, <code>count</code>, kan användas för att ange antalet tecken som ska tas bort. Standardvärdet för <code>count</code> är 1. Positionsvärden börjar på 0.


## Examples

### Example #1 
Ta bort 1 tecken från textvärdet &#34;ABEFC&#34; vid position 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Ta bort två tecken från textvärdet &#34;ABEFC&#34; med början vid position 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
