---
title: Function.From
---

# Function.From


Skapar en funktion med en viss parametersignatur för en funktion som har ett enda listargument


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Ta den unära funktionen <code>function</code> och skapa en ny funktion med typen <code>functionType</code> som i sin tur skapar en lista av dess argument och skickar den till <code>function</code>.


## Examples

### Example #1 
Konverterar List.Sum till en tvåargumentsfunktion vars argument läggs ihop
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Konverterar en funktion som tar en lista till en tvåargumentsfunktion
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
