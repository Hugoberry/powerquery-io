---
title: Function.From
---

# Function.From


## Description

Erstellt eine Funktion mit einer bestimmten Parametersignatur basierend auf einer Funktion, die ein einzelnes Listenargument verwendet.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Erstellt anhand einer unären Funktion "<code>function</code>" eine neue Funktion des Typs "<code>functionType</code>", die eine Liste aus ihren Argumenten zusammenstellt und an "<code>function</code>" übergibt.


## Examples

### Example #1 
Konvertiert &#34;List.Sum&#34; in eine Funktion mit zwei Argumenten, deren Argumente addiert werden.
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
