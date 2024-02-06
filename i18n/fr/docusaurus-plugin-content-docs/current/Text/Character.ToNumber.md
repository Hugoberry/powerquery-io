---
title: Character.ToNumber
---

# Character.ToNumber


Convertit un caractère en valeur numérique.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Renvoie l'équivalent numérique du <code>character</code>.<br />    <br />    Le résultat sera le point de code Unicode 21 bits représenté par le caractère fourni ou la paire de substitution.  


## Examples

### Example #1 
Convertit un caractère en sa valeur numérique équivalente.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Convertissez la paire de substitution UTF-16 pour l&#39;émoticône &#34; visage souriant &#34; en son point de code hexadécimal équivalent.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
