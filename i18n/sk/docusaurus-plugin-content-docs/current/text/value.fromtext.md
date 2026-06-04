---
title: Value.FromText
---

# Value.FromText


Vytvorí hodnotu silného typu z textového vyjadrenia.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Dekóduje hodnotu z textového vyjadrenia a interpretuje ju ako hodnotu s príslušným typom.

-   `text`: Text na interpretáciu.
-   `culture`: (Voliteľné) Konkrétna kultúra používaná na interpretáciu textu (napríklad en-US).

Táto funkcia použije textovú hodnotu a vráti hodnotu typu `number`, `logical`, `null`, `datetime`, `duration` alebo `text`. Prázdna textová hodnota sa interpretuje ako hodnota `null`.


## Examples

### Example #1
Konvertuje text predstavujúci číslo na zodpovedajúcu číselnú hodnotu.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Konvertuje text predstavujúci percento na zodpovedajúcu číselnú hodnotu.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Konvertujte text predstavujúci hodnotu francúzskeho eura na zodpovedajúcu číselnú hodnotu.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Konvertuje text predstavujúci nemecký dátum a čas na zodpovedajúcu hodnotu dátumu a času.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
