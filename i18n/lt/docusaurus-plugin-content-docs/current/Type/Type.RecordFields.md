---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Pateikiamas įrašas, aprašantis įrašo tipo laukus, o pateikiamo įrašų tipo kiekvienas laukas turi atitinkamą pavadinimą ir reikšmę.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Pateikiamas įrašo <code>type</code> laukus aprašantis įrašas. Kiekvienas pateikto įrašų tipo laukas turi atitinkamą pavadinimą ir reikšmę, kurie pateikti kaip įrašas <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Raskite įrašo &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt; pavadinimą ir reikšmę.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
