---
title: Function.From
---

# Function.From


## Description

Crée une fonction avec une signature de paramètre spécifique sur une fonction qui prend un seul argument de liste


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Prend une fonction unaire <code>function</code> et crée une nouvelle fonction avec le type <code>functionType</code> qui crée une liste de ses arguments et la passe à <code>function</code>.


## Examples

### Example #1 
Convertit List.Sum en fonction à deux arguments dont les arguments sont ajoutés ensemble
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Convertit une fonction prenant une liste en fonction à deux arguments
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
