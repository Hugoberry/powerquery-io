---
title: Guid.From
---

# Guid.From


## Description

Vrne vrednost GUID navedene vrednosti.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Vrne vrednost <code>Guid. Vrednost Type</code> iz navedene vrednosti <code>value</code>. Če je navedena vrednost <code>value</code> <code>null</code>, <code>Guid.From</code> vrne <code>null</code>. Izvedeno bo preverjanje, pri katerem bo preverjeno, ali je navedena vrednost <code>value</code> v sprejemljivi obliki zapisa. Sprejemljive oblike zapisa so navedene v primerih.


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
