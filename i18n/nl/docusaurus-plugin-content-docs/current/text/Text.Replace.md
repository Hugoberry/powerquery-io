---
title: Text.Replace
---

# Text.Replace


Vervangt alle instanties van de opgegeven subtekenreeks in de tekst.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Retourneert het resultaat van het vervangen van alle instanties van tekstwaarde <code>old</code> in tekstwaarde <code>text</code> door tekstwaarde <code>new</code>. Bij deze functie wordt onderscheid gemaakt tussen hoofdletters en kleine letters.


## Examples

### Example #1 
Elke instantie van het woord &#34;het&#34; in een zin vervangen door &#34;een&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
