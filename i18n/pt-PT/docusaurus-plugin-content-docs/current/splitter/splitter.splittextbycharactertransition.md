---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Devolve uma função que divide o texto numa lista de texto de acordo com uma transição de um tipo de caráter para outro. Os parâmetros \{0} e \{1} podem ser tanto uma lista de carateres como uma função que utiliza um caráter e devolve verdeiro/falso.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Devolve uma função que divide o texto numa lista de texto de acordo com uma transição de um tipo de caráter para outro. Os parâmetros <code>before</code> e <code>after</code> podem ser tanto uma lista de carateres como uma função que utiliza um caráter e devolve verdeiro/falso.


## Examples

### Example #1 
Divida a entrada sempre que uma letra maiúscula ou minúscula for seguida de um dígito.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
