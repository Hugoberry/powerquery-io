---
title: Function.From
---

# Function.From


## Description

Sukuriama funkcija su konkretaus parametro parašu greta funkcijos, naudojančios vieno sąrašo argumentą


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Ima vienanarę funkciją <code>function</code> ir sukuria naują <code>functionType</code> tipo funkciją, kuri iš jos argumentų sudaro sąrašą ir perduoda jį į <code>function</code>.


## Examples

### Example #1 
Konvertuoja List.Sum į dviejų argumentų funkciją, kurios argumentai sudedami
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Konvertuoja funkciją perkeliant sąrašą į dviejų argumentų funkciją
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
