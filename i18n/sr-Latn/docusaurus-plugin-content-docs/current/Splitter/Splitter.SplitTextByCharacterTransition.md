---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Vraća funkciju koja deli tekst na listu teksta u skladu sa prelazom sa jedne vrste znaka na drugu. Parametri \{0} i \{1} mogu da budu lista znakova ili funkcija koja uzima znak i vraća vrednost true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Vraća funkciju koja deli tekst na listu teksta u skladu sa prelazom sa jedne vrste znaka na drugu. Parametri <code>before</code> i <code>after</code> mogu da budu lista znakova ili funkcija koja uzima znak i vraća vrednost true/false.


## Examples

### Example #1 
Razdelite unos svaki put kada sledi veliko ili malo slovo praćeno cifrom.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
