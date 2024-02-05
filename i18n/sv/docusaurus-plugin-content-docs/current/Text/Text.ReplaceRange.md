---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

Returnerar resultatet från borttagningen av ett antal tecken, <code>count</code>, från textvärdet <code>text</code> med början vid position <code>offset</code> och den efterföljande infogningen av textvärdet <code>newText</code> vid samma position i <code>text</code>.


## Examples

### Example #1 
Ersätt ett enskilt tecken vid position 2 i textvärdet &#34;ABGF&#34; med det nya textvärdet &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
