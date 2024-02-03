---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Vráti zostavy z konta Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Vráti zostavy v konte Salesforce poskytnuté v povereniach. Konto sa pripojí prostredníctvom poskytnutého prostredia <code>loginUrl</code>. Ak nie je poskytnuté žiadne prostredie, konto sa pripojí do produkčného prostredia (https://login.salesforce.com). Na zadanie ďalších vlastností možno poskytnúť voliteľný parameter záznamu, <code>options</code>. Záznam môže obsahovať tieto polia:    <ul><li><code>ApiVersion</code> : Verzia rozhrania API Salesforce na použitie pre tento dotaz. Ak nie je zadan&#225;, použije sa verzia rozhrania API 29.0.</li><li><code>Timeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m žiadosti odoslanej na server. Predvolen&#225; hodnota je viazan&#225; na zdroj.</li></ul>    



## Category
Accessing data
