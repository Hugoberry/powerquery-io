---
title: Number.FromText
---

# Number.FromText


Luo lukuja tavallisista tekstimuodoista ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Palauttaa `number`\-arvon annetusta tekstiarvosta `text`.

-   `text`: lukuarvon tekstiesitys. Esityksen on oltava tavallisessa lukumuodossa, kuten 15, 3,423.10 tai 5.0E-10.
-   `culture`: valinnainen maa-asetus, joka hallitsee sitä, miten `text` tulkitaan (esimerkiksi en-US).


## Examples

### Example #1
Hae luvun `"4"` lukuarvo.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Hae luvun `"5.0e-10"` lukuarvo.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
