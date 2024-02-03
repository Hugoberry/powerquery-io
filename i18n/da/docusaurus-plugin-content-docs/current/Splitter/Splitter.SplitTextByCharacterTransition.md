---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Returnerer en funktion, der opdeler tekst på en liste med tekst i overensstemmelse med en overgang fra én slags tegn til et andet. Parametrene \{0} og \{1} kan enten være en liste over tegn eller en funktion, som tager et tegn og returnerer true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Returnerer en funktion, der opdeler tekst på en liste med tekst i overensstemmelse med en overgang fra én slags tegn til et andet. Parametrene <code>before</code> og <code>after</code> kan enten være en liste over tegn eller en funktion, som tager et tegn og returnerer true/false.


## Examples

### Example #1 
Opdel input, når et stort eller lille bogstav efterfølges af et ciffer.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
