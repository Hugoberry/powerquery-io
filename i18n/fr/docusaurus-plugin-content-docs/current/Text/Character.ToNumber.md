---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Convertit un caractère en sa valeur de nombre.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Retourne l'équivalent en nombre du caractère, <code>character</code>.


## Examples

### Example #1 
Avec le caractère &#34; #(tab) &#34; 9, recherchez la valeur de nombre.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```




## Category
Text.Conversions from and to text
