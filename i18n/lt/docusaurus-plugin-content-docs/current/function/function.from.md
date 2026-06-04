---
title: Function.From
---

# Function.From


Sukuriama funkcija su konkretaus parametro parašu greta funkcijos, naudojančios vieno sąrašo argumentą.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Ima vienanarę funkciją `function` ir sukuria naują `functionType` tipo funkciją, kuri iš jos argumentų sudaro sąrašą ir perduoda jį į `function`.


## Examples

### Example #1
Konvertuoja List.Sum į dviejų argumentų funkciją, kurios argumentai sudedami.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Konvertuoja funkciją perkeliant sąrašą į dviejų argumentų funkciją.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
