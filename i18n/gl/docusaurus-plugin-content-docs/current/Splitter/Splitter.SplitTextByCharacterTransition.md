---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Devolve unha función que divide texto nunha lista de texto segundo unha transición desde un tipo de carácter a outro. Os parámetros \{0} e \{1} poden ser unha lista de caracteres ou unha función que toma un carácter e devolve true ou false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Devolve unha función que divide texto nunha lista de texto segundo unha transición desde un tipo de carácter a outro. Os parámetros <code>before</code> e <code>after</code> poden ser unha lista de caracteres ou unha función que toma un carácter e devolve true ou false.


## Examples

### Example #1 
Divide a entrada sempre que unha letra maiúscula ou minúscula vaia seguida dun díxito.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
