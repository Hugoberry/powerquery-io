---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi yhdenlaisesta merkistä toisenlaiseen siirtymisen mukaan. Parametrit \{0} ja \{1} voivat olla joko merkkien luettelo tai funktio, joka ottaa merkin ja palauttaa arvon true tai false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi yhdenlaisesta merkistä toisenlaiseen siirtymisen mukaan. Parametrit <code>before</code> ja <code>after</code> voivat olla joko merkkien luettelo tai funktio, joka ottaa merkin ja palauttaa arvon true tai false.


## Examples

### Example #1 
Jaa syöte aina, kun isoja tai pieniä kirjaimia seuraa numero.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
