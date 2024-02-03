---
title: Number.ToText
---

# Number.ToText


## Description

Szöveggé alakítja a megadott számot.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Átalakítja a(z) <code>number</code> számértéket a(z) <code>format</code><br /> által megadott formátumú szöveges értékké
    <br />    A formátum egy szöveges érték, amely a szám konvertálásának módját jelzi. A támogatott formátumértékekkel kapcsolatos további részletekért látogasson el a https://go.microsoft.com/fwlink/?linkid=2241210 és a https://go.microsoft.com/fwlink/?linkid=2240884.<br /> webhelyre    <br />   Opcionális <code>culture</code> is megadható (például „en-US“) a(z) <code>format</code> kulturális környezettől függő viselkedésének szabályozásához.


## Examples

### Example #1 
Szám átalakítása szöveggé formátum megadása nélkül.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Szám átalakítása exponenciális formátumra.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Szám átalakítása csak egy tizedeshelyet tartalmazó százalékos formátumra.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
