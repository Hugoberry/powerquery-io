---
title: Character.FromNumber
---

# Character.FromNumber


Convertit un nombre en caractère de texte.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Renvoie l'équivalent en caractères du nombre.<br />    <br />    Le code <code>number</code> fourni doit être un point de code Unicode de 21 bits.


## Examples

### Example #1 
Convertit un nombre en sa valeur de caractère équivalente.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Convertissez un caractère en nombre et inversement.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Convertissez le point de code hexadécimal de l&#39;émoticône &#34; visage souriant &#34; en sa paire de substitution UTF-16 équivalente.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
