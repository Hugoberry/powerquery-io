---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Returnează o funcție care scindează textul într-o listă de texte conform unei tranziții de la un tip de caractere la altul. Parametrii \{0} și \{1} pot fi o listă de caractere sau o funcție care ia un caracter și returnează true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Returnează o funcție care scindează textul într-o listă de texte conform unei tranziții de la un tip de caractere la altul. Parametrii <code>before</code> și <code>after</code> pot fi o listă de caractere sau o funcție care ia un caracter și returnează true/false.


## Examples

### Example #1 
Divizează intrarea de fiecare dată când o literă mare sau mică este urmată de o cifră.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
