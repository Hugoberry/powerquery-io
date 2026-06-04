---
title: Number.FromText
---

# Number.FromText


Vytvorí čísla z bežných formátov textu ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Vráti hodnotu `number` z danej textovej hodnoty `text`.

-   `text`: Vráti textové vyjadrenie číselnej hodnoty. Vyjadrenie musí byť v bežnom formáte textu, ako napríklad 15, 3,423.10 alebo 5.0E-10.
-   `culture`: Voliteľná jazyková verzia, ktorá určuje, ako sa `text` interpretuje (napríklad en-US).


## Examples

### Example #1
Získajte číselnú hodnotu čísla `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Získajte číselnú hodnotu čísla `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
