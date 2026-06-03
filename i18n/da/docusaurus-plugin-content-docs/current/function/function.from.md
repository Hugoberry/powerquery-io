---
title: Function.From
---

# Function.From


Opretter en funktion med en bestemt parametersignatur oven på en funktion, der tager et enkelt listeargument.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Tager en unær funktion `function` og opretter en ny funktion med typen `functionType`, der opretter en liste ud fra argumenterne og overfører den til `function`.


## Examples

### Example #1
Konverterer List.Sum til en funktion med to argumenter, hvis argumenter er lagt sammen.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Konverterer en funktion, der tager en liste, til en funktion med to argumenter.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
