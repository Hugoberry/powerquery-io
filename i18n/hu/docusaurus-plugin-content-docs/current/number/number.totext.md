---
title: Number.ToText
---

# Number.ToText


Szöveggé alakítja a megadott számot.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Átalakítja a(z) `number` számértéket a(z) `format`  
által megadott formátumú szöveges értékké  
A formátum egy szöveges érték, amely a szám konvertálásának módját jelzi. A támogatott formátumértékekkel kapcsolatos további részletekért látogasson el a https://go.microsoft.com/fwlink/?linkid=2241210 és a https://go.microsoft.com/fwlink/?linkid=2240884.  
webhelyre  
Opcionális `culture` is megadható (például „en-US“) a(z) `format` kulturális környezettől függő viselkedésének szabályozásához.


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
