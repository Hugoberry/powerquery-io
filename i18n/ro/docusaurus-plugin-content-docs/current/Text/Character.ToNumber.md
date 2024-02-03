---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Convertește un caracter la o valoare numerică.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Returnează echivalentul numeric al <code>character</code>.<br />    <br />    Rezultatul va fi punctul de cod Unicode pe 21 de biți reprezentat de caracterul furnizat sau perechea surogat.  


## Examples

### Example #1 
Convertește un caracter la valoarea sa numerică echivalentă.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Convertiți perechea surogat UTF-16 pentru emoticonul „față rânjind” în punctul său de cod hexazecimal echivalent.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
