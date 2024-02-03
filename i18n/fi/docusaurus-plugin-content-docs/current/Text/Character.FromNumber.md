---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Muuntaa luvun tekstimerkiksi.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Palauttaa lukua vastaavan merkin.<br />    <br />    Annetun kohteen <code>number</code> tulee olla 21-bittinen Unicode-koodipiste.


## Examples

### Example #1 
Muunna luku vastaavaksi merkkiarvoksi.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Muunna merkki luvuksi ja takaisin merkiksi.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Muunna virnistävän hymiön heksadesimaalikoodipiste vastaavaksi UTF-16-korvauspariksi.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
