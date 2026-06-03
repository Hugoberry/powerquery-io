---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Tar bort ett teckenintervall och infogar ett nytt värde vid en angiven position.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Returnerar resultatet från borttagningen av ett antal tecken, `count`, från textvärdet `text` med början vid position `offset` och den efterföljande infogningen av textvärdet `newText` vid samma position i `text`.


## Examples

### Example #1
Ersätt ett enskilt tecken vid position 2 i textvärdet "ABGF" med det nya textvärdet "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
