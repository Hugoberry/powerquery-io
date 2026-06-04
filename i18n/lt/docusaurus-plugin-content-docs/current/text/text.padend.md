---
title: Text.PadEnd
---

# Text.PadEnd


Pateikiamas nurodyto ilgio tekstas užpildant nurodyto teksto pabaigą.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Pateikiama `text` reikšmė, užpildyta iki ilgio `count`, įterpiant tarpus tekstinės reikšmės `text` pabaigoje. Norint nurodyti užpildymui naudojamą simbolį, galima naudoti pasirenkamą parametrą `character`. Numatytasis užpildymo simbolis yra tarpas.


## Examples

### Example #1
Užpildykite tekstinės reikšmės pabaigą, kad ji būtų 10 simbolių ilgio.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Užpildykite tekstinės reikšmės pabaigą simboliu „|“, kad ji būtų 10 simbolių ilgio.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
