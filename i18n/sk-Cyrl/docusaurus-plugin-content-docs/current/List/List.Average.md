---
title: List.Average
---

# List.Average


## Description

Vráti priemer hodnôt. Funguje s číslom, s hodnotami dátumu, dátumu a času, datetimezone a trvania.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Vráti priemernú hodnotu pre položky v zozname <code>list</code>. Výsledok sa uvádza v rovnakom type údajov ako hodnoty v zozname. Funguje iba s číslom, s hodnotami dátumu, času, dátumu a času, datetimezone a trvania.    Ak je zoznam prázdny, vráti sa hodnota null.


## Examples

### Example #1 
Vyhľadajte priemer zoznamu čísel &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Vyhľadajte priemer hodnôt dátumov 1. január 2011, 2. január 2011 a 3. január 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
