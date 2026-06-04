---
title: Guid.From
---

# Guid.From


Vrne vrednost GUID navedene vrednosti.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Vrne vrednost `Guid. Vrednost Type` iz navedene vrednosti `value`. Če je navedena vrednost `value` `null`, `Guid.From` vrne `null`. Izvedeno bo preverjanje, pri katerem bo preverjeno, ali je navedena vrednost `value` v sprejemljivi obliki zapisa. Sprejemljive oblike zapisa so navedene v primerih.


## Examples

### Example #1
GUID lahko navedete v obliki 32 sosednjih šestnajstiških števk.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2
GUID lahko navedete v obliki 32 sosednjih šestnajstiških števk, ločenih z vezaji v bloke po 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3
GUID lahko navedete v obliki 32 sosednjih šestnajstiških števk, ločenih z vezaji in vključenih v zavite oklepaje.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4
GUID lahko navedete v obliki 32 sosednjih šestnajstiških števk, ločenih z vezaji in vključenih v okrogle oklepaje.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
