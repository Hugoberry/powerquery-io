---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Pretvori znak v številsko vrednost.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Vrne število, ki je enakovredno <code>character</code>.<br />    <br />    Rezultat bo 21-bitna kodna točka Unicode, ki jo predstavlja navedeni znak ali nadomestni par.  


## Examples

### Example #1 
Pretvori znak v enakovredno številsko vrednost.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Pretvorite nadomestni par UTF-16 za čustveni simbol &#34;režeči se obraz&#34; v ustrezno šestnajstiško kodno točko.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
