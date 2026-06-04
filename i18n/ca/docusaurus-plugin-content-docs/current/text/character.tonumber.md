---
title: Character.ToNumber
---

# Character.ToNumber


Converteix un caràcter en un valor de nombre.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Retorna el nombre equivalent de `character`.  
  
El resultat serà el punt de codi Unicode de 21 bits representat pel caràcter o parell substitut proporcionat.


## Examples

### Example #1
Converteix un caràcter en el seu valor de nombre equivalent.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
Converteix el parell substitut UTF-16 per a l'emoticona "cara somrient" al seu punt de codi hexadecimal equivalent.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
