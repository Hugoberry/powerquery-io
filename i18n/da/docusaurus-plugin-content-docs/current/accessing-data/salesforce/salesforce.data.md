---
title: Salesforce.Data
---

# Salesforce.Data


Returnerer objekter fra Salesforce-kontoen.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Returnerer objekterne på den Salesforce-konto, der er angivet i legitimationsoplysningerne. Kontoen forbindes via det angivne miljø `loginUrl`. Hvis der ikke er angivet et miljø, forbindes kontoen med produktionen (https://login.salesforce.com). Der kan angives en valgfri postparameter, `options`, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:

-   `CreateNavigationProperties` : En logisk værdi (true/false), der angiver, om der skal genereres navigationsegenskaber på de returnerede værdier (standard er false).
-   `ApiVersion` : Den Salesforce API-version, der skal anvendes til forespørgslen. Når versionen ikke er angivet, anvendes API version 29.0.
-   `Timeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien er kildespecifik.



## Category
Accessing data
