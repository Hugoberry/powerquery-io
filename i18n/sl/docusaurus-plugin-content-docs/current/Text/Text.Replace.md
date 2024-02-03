---
title: Text.Replace
---

# Text.Replace


## Description

Zamenja vse pojavitve danega podniza v besedilu.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Vrne rezultat zamenjave vseh pojavitev besedilne vrednosti <code>old</code> v besedilni vrednosti <code>text</code> z besedilno vrednostjo <code>new</code>. Ta funkcija razlikuje med velikimi in malimi črkami.


## Examples

### Example #1 
Zamenjajte vse pojavitve besede &#34;the&#34; v stavku z besedo &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
