---
title: Function.From
---

# Function.From


Crée une fonction dotée d'une signature de paramètres spécifique, à partir d'une fonction qui accepte un unique argument de type liste.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Prend une fonction unaire `function` et crée une nouvelle fonction avec le type `functionType` qui crée une liste de ses arguments et la passe à `function`.


## Examples

### Example #1
Convertit List.Sum en une fonction à deux arguments dont les arguments sont additionnés.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Convertit une fonction prenant une liste en une fonction à deux arguments.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
