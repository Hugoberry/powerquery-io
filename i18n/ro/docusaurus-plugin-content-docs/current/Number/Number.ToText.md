---
title: Number.ToText
---

# Number.ToText


## Description

Efectuează conversia numărului dat în text.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Efectuează conversia valorii numerice <code>number</code> într-o valoare text conform formatului specificat de <code>format</code>.<br />    <br />    Formatul este o valoare text care indică modul în care ar trebui să se efectueze conversia numărului. Pentru mai multe detalii despre valorile de format acceptate, accesați https://go.microsoft.com/fwlink/?linkid=2241210 și https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Opțional, se poate furniza și <code>culture</code> (de exemplu, „ro-RO”) pentru a controla comportamentul <code>format</code> care depinde de cultură.


## Examples

### Example #1 
Efectuați conversia unui număr în text fără a specifica un format.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Efectuați conversia unui număr în format exponențial.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Efectuați conversia unui număr în format procentual cu o singură zecimală.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
