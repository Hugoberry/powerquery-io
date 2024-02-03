---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Vraća jednu stavku sa liste za listu dužine jedan i podrazumevanu vrednost za praznu listu.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Ako lista <code>list</code> sadrži samo jednu stavku, vraća tu stavku.    Ako je lista prazna, funkcija vraća vrednost bez vrednosti, osim u slučaju da se navede opcionalna vrednost <code>default</code>. Ako lista sadrži dve ili više stavki, funkcija vraća grešku.


## Examples

### Example #1 
Pronalaženje jedne vrednosti sa liste \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Pronalaženje jedne vrednosti sa liste \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Pronalaženje jedne vrednosti sa liste \{}. Ako je lista prazna, vraća se -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
