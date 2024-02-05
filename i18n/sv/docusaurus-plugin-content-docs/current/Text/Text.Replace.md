---
title: Text.Replace
---

# Text.Replace


## Description

Ersätter alla förekomster av den angivna delsträngen i texten.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Returnerar resultatet från ersättningen av alla förekomster av textvärdet <code>old</code> i textvärdet <code>text</code> med textvärdet <code>new</code>. Den här funktionen är skiftlägeskänslig.


## Examples

### Example #1 
Ersätt varje förekomst av &#34;the&#34; i en mening med &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
