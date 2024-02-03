---
title: Number.ToText
---

# Number.ToText


## Description

Konvertuje dati broj u tekst.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Konvertuje numeričku vrednost <code>number</code> u tekstualnu vrednost u skladu sa formatom koji navodi <code>format</code>.<br />    <br />    Format predstavlja tekstualnu vrednost koja ukazuje na to kako treba konvertovati broj. Za više detalja o podržanim vrednostima formata idite na https://go.microsoft.com/fwlink/?linkid=2241210 i https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Opcionalno <code>culture</code> se može takođe obezbediti (na primer, „en-US”) za kontrolisanje ponašanja koja zavise od kulture od <code>format</code>.


## Examples

### Example #1 
Konvertuj broj u tekst bez navođenja formata.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Konvertuj broj u eksponencijalni format.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Konvertuj broj u format procenta sa samo jednim decimalnim mestom.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
