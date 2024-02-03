---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Convertește un număr într-un caracter text.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Returnează echivalentul în caractere a numărului.<br />    <br />    <code>number</code> furnizat trebuie să fie un punct de cod Unicode pe 21 de biți.


## Examples

### Example #1 
Convertește un număr la valoarea sa echivalentă în caractere.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Convertiți un caracter într-un număr și reveniți.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Convertiți punctul de cod hexazecimal pentru emoticonul „față rânjind” în perechea surogat UTF-16 echivalentă.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
