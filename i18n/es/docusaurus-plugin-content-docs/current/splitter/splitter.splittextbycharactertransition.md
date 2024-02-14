---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Devuelve una función que divide texto en una lista de texto según una transición de un tipo de carácter a otro. Los parámetros \{0} y \{1} pueden ser una lista de caracteres o una función que toma un carácter y devuelve true o false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Devuelve una función que divide texto en una lista de texto según una transición de un tipo de carácter a otro. Los parámetros <code>before</code> y <code>after</code> pueden ser una lista de caracteres o una función que toma un carácter y devuelve true o false.


## Examples

### Example #1 
Divida la entrada cada vez que una letra mayúscula o minúscula va seguida de un dígito.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
