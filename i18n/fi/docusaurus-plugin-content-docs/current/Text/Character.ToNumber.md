---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Muuntaa merkin lukuarvoksi.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Palauttaa kohdetta <code>character</code> vastaavan luvun.<br />    <br />    Tuloksena on annetun merkki- tai korvausparin edustama 21-bittinen Unicode-koodipiste.  


## Examples

### Example #1 
Muunna merkki vastaavaksi lukuarvoksi.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Muunna virnistävän hymiön UTF-16-korvauspari vastaavaksi heksadesimaalikoodipisteeksi.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
