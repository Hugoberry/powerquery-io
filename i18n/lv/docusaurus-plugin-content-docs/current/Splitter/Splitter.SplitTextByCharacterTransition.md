---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Atgriež funkciju, kas tekstu sadala teksta sarakstā saskaņā ar pāreju no viena veida rakstzīmes uz citu. Parametrs \{0} un \{1} var būt rakstzīmju saraksts vai funkcija, kas pieņem rakstzīmi un atgriež vērtību true/false (patiess/aplams).


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Atgriež funkciju, kas tekstu sadala teksta sarakstā saskaņā ar pāreju no viena veida rakstzīmes uz citu. Parametrs <code>before</code> un <code>after</code> var būt rakstzīmju saraksts vai funkcija, kas pieņem rakstzīmi un atgriež vērtību true/false (patiess/aplams).


## Examples

### Example #1 
Sadalīt ievadi ikreiz, kad pēc lielajiem vai mazajiem burtiem seko cipars.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
