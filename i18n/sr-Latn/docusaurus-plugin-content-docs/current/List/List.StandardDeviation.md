---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Vraća procenu standardne devijacije koja se zasniva na uzorku.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Vraća procenu standardne devijacije vrednosti sa liste, <code>numbersList</code>, koja se zasniva na uzorku.    Ako je <code>numbersList</code> lista brojeva, vraća se broj.    Vraća se izuzetak ako je lista prazna ili ako sadrži stavke koje nisu tipa <code>broj</code>.


## Examples

### Example #1 
Pronalaženje standardne devijacije brojeva od 1 do 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
