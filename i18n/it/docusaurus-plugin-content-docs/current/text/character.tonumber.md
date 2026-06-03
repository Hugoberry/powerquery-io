---
title: Character.ToNumber
---

# Character.ToNumber


Converte un carattere nel valore numerico.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Restituisce il numero equivalente al `character`.  
  
Il risultato sarà il codice carattere Unicode a 21 bit rappresentato dal carattere specificato o dalla coppia di surrogati.


## Examples

### Example #1
Converte un carattere nel valore numerico equivalente.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
Converte la coppia di surrogati UTF-16 per l'emoticon "sogghigno" nel relativo codice carattere esadecimale equivalente.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
