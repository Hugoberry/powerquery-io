---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Retorna una funció que divideix el text en una llista de text a partir d'una transició d'un tipus de caràcter a un altre. Els paràmetres \{0\} i \{1\} poden ser una llista de caràcters o una funció que utilitza un caràcter i retorna un valor "true" o "false".


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Retorna una funció que divideix el text en una llista de text a partir d'una transició d'un tipus de caràcter a un altre. Els paràmetres `before` i `after` poden ser una llista de caràcters o una funció que utilitza un caràcter i retorna un valor "true" o "false".


## Examples

### Example #1
Divideix l'entrada cada vegada que una lletra majúscula o minúscula va seguida d'un dígit.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
