---
title: Function.From
---

# Function.From


Erstellt eine Funktion mit einer bestimmten Parametersignatur basierend auf einer Funktion, die ein einzelnes Listenargument verwendet.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Erstellt anhand einer unären Funktion "`function`" eine neue Funktion des Typs "`functionType`", die eine Liste aus ihren Argumenten zusammenstellt und an "`function`" übergibt.


## Examples

### Example #1
Konvertiert List.Sum in eine Funktion mit zwei Argumenten, deren Werte addiert werden.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Konvertiert eine Funktion, die eine Liste verwendet, in eine Funktion mit zwei Argumenten.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
