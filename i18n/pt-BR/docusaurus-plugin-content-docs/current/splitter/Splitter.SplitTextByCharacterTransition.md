---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Retorna uma função que divide o texto em uma lista de texto de acordo com uma transição de um tipo de caractere para outro. Os parâmetros \{0} e \{1} podem ser uma lista de caracteres ou uma função que usa um caractere e retorna true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Retorna uma função que divide o texto em uma lista de texto de acordo com uma transição de um tipo de caractere para outro. Os parâmetros <code>before</code> e <code>after</code> podem ser uma lista de caracteres ou uma função que usa um caractere e retorna true/false.


## Examples

### Example #1 
Divida a entrada sempre que uma letra maiúscula ou minúscula for seguida por um dígito.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
