---
title: Text.PadStart
---

# Text.PadStart


## Description

Pateikiamas nurodyto ilgio tekstas užpildant nurodyto teksto pradžią.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Pateikiama <code>text</code> reikšmė, užpildyta iki ilgio <code>count</code>, įterpiant tarpus tekstinės reikšmės <code>text</code> pradžioje.    Norint nurodyti užpildymui naudojamą simbolį, galima naudoti pasirenkamą parametrą <code>character</code>. Numatytasis užpildymo simbolis yra tarpas.


## Examples

### Example #1 
Užpildykite tekstinės reikšmės pradžią, kad ji būtų 10 simbolių ilgio.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Užpildykite tekstinės reikšmės pradžią simboliu „|“, kad ji būtų 10 simbolių ilgio.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
