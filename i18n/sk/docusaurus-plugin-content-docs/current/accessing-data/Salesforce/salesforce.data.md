---
title: Salesforce.Data
---

# Salesforce.Data


Vráti objekty z konta Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Vráti objekty v konte Salesforce poskytnuté v povereniach. Konto sa pripojí prostredníctvom poskytnutého prostredia `loginUrl`. Ak nie je poskytnuté žiadne prostredie, konto sa pripojí do produkčného prostredia (https://login.salesforce.com). Na zadanie ďalších vlastností možno poskytnúť voliteľný parameter záznamu, `options`. Záznam môže obsahovať tieto polia:

-   `CreateNavigationProperties` : Logická hodnota (True/False), ktorá nastavuje, či sa majú generovať vlastnosti navigácie v prípade vrátených hodnôt (predvolená hodnota je False).
-   `ApiVersion` : Verzia rozhrania API Salesforce na použitie pre tento dotaz. Ak nie je zadaná, použije sa verzia rozhrania API 29.0.
-   `Timeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním žiadosti odoslanej na server. Predvolená hodnota je viazaná na zdroj.



## Category
Accessing data
