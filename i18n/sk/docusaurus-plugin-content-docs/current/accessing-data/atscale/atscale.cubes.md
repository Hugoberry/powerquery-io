---
title: AtScale.Cubes
---

# AtScale.Cubes


Importovať údaje kocky /DirectQuery z funkcie AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Vráti údaje kocky z funkcie AtScale na serveri `server`. Môže sa zadať voliteľný parameter záznamu, `options`, pomocou ktorého sa dajú ovládať nasledujúce možnosti:

-   `TypedMeasureColumns`: Logická hodnota, ktorá udáva, či sa typy zadané v multidimenzionálnom alebo tabuľkovom modeli použijú pre typy stĺpcov pridaných mierok. Keď sú nastavené na hodnotu false, pre všetky stĺpce mierok sa použije typ number. Predvolenou hodnotou pre túto možnosť je false.
-   `CommandTimeout`: Trvanie (v sekundách), ktoré ovláda, ako dlho môže byť spustený dotaz na strane servera pred tým, ako to bude zrušený. Predvolená hodnota závisí od ovládača.
-   `ConnectionTimeout`: Trvanie (v sekundách), ktoré ovláda, ako dlho treba čakať pred tým, ako sa zruší pokus o pripojenie na server. Predvolená hodnota závisí od ovládača.

Parameter záznamu je zadaný vo formáte \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Zobrazí zoznam údajov kocky v kocke AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



