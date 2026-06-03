---
title: Function.From
---

# Function.From


Hiermee maakt u een functie met een specifieke parameterhandtekening op een functie die een enkel lijstargument nodig heeft.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Hiermee neemt u een unaire functie `function` en maakt u een nieuwe functie van het type `functionType` die een lijst met argumenten opbouwt en deze doorgeeft aan `function`.


## Examples

### Example #1
List.Sum wordt omgezet in een functie met twee argumenten waarvan de argumenten bij elkaar zijn opgeteld.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Hiermee converteert u een functie waarbij een lijst in een functie met twee argumenten wordt omgezet.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
