---
title: List.StandardDeviation
---

# List.StandardDeviation


Vraća procenu standardne devijacije koja se zasniva na uzorku.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Vraća procenu standardne devijacije vrednosti sa liste, `numbersList`, koja se zasniva na uzorku. Ako je `numbersList` lista brojeva, vraća se broj. Prijavljuje se greška ako je lista prazna ili ako sadrži stavke koje nisu tipa `broj`.


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
