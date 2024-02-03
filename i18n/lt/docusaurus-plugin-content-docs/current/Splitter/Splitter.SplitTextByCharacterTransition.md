---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pagal perėjimą iš vieno simbolių tipo į kitą. \{0} Ir \{1} parametrai gali būti simbolių sąrašas arba funkcija, kuri ima simbolį ir pateikia reikšmę „true“ / „false“.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pagal perėjimą iš vieno simbolių tipo į kitą. <code>before</code> Ir <code>after</code> parametrai gali būti simbolių sąrašas arba funkcija, kuri ima simbolį ir pateikia reikšmę „true“ / „false“.


## Examples

### Example #1 
Išskaidykite įvestį, kai po didžiosios arba mažosios raidės yra skaitmuo.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
