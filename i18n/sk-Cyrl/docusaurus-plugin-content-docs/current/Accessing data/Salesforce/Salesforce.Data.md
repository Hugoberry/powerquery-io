---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Vráti objekty z konta Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Vráti objekty v konte Salesforce poskytnuté v povereniach. Konto sa pripojí prostredníctvom poskytnutého prostredia <code>loginUrl</code>. Ak nie je poskytnuté žiadne prostredie, konto sa pripojí do produkčného prostredia (https://login.salesforce.com). Na zadanie ďalších vlastností možno poskytnúť voliteľný parameter záznamu, <code>options</code>. Záznam môže obsahovať tieto polia:    <ul><li><code>CreateNavigationProperties</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; generovať vlastnosti navig&#225;cie v pr&#237;pade vr&#225;ten&#253;ch hodn&#244;t (predvolen&#225; hodnota je False).</li><li><code>ApiVersion</code> : Verzia rozhrania API Salesforce na použitie pre tento dotaz. Ak nie je zadan&#225;, použije sa verzia rozhrania API 29.0.</li><li><code>Timeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m žiadosti odoslanej na server. Predvolen&#225; hodnota je viazan&#225; na zdroj.</li></ul>    



## Category
Accessing data
