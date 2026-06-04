---
title: Comparer.Equals
---

# Comparer.Equals


Vráti logickú hodnotu na základe kontroly rovnosti dvoch daných hodnôt.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Vráti `logickú hodnotu` na základe kontroly rovnosti dvoch daných hodnôt `x` a `y` pomocou uvedenej `comparer`.

`comparer` je `porovnávač`, ktorý sa používa na riadenie porovnania. Funkcia porovnávača je funkcia, ktorá akceptuje dva argumenty a vráti hodnotu -1, 0 alebo 1 na základe toho, či je prvá hodnota menšia, rovná alebo väčšia ako druhá hodnota. Porovnávače možno použiť na poskytovanie porovnaní bez rozlišovania malých a veľkých písmen alebo s ohľadom na jazykovú verziu a miestne nastavenie.

V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:

-   `Comparer.Ordinal`: Používa sa na presné poradové porovnanie
-   `Comparer.OrdinalIgnoreCase`: Používa sa na presné poradové porovnanie bez rozlišovania malých a veľkých písmen
-   `Comparer.FromCulture`: Používa sa na vykonanie porovnania s ohľadom na jazykovú verziu


## Examples

### Example #1
Porovnaj "1" a "A" s použitím miestneho nastavenia "en-US" a zisti, či sa hodnoty rovnajú.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
