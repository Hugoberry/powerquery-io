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

Retourneert het resultaat van het vervangen van alle instanties van tekstwaarde `old` in tekstwaarde `text` door tekstwaarde `new`. Bij deze functie wordt onderscheid gemaakt tussen hoofdletters en kleine letters.


## Examples

### Example #1
Elke instantie van het woord "het" in een zin vervangen door "een".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
