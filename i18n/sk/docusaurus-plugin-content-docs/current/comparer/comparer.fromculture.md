---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Vráti funkciu porovnávača na základe zadanej kultúry a rozlišovania malých a veľkých písmen.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Vráti funkciu porovnávača, ktorá používa `culture` a rozlišovanie malých a veľkých písmen `ignoreCase` na vykonanie porovnaní.  
  
Funkcia porovnávača akceptuje dva argumenty a vráti hodnotu -1, 0 alebo 1 na základe toho, či je prvá hodnota menšia, rovná alebo väčšia ako druhá hodnota.  
  
Predvolená hodnota pre `ignoreCase` je false. Jazyková verzia `culture` by mala byť jedným z miestnych nastavení podporovaných rozhraním .NET framework (napríklad sk-SK).


## Examples

### Example #1
Porovnaj "a" a "A" s použitím miestneho nastavenia "en-US" a zisti, či sa hodnoty rovnajú.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Porovnaj "a" a "A" s použitím miestneho nastavenia "en-US" pri ignorovaní veľkých a malých písmen a zisti, či sa hodnoty rovnajú.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
