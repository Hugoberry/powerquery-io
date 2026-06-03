---
title: Salesforce.Reports
---

# Salesforce.Reports


Returnerer rapporterne fra Salesforce-kontoen.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Returnerer rapporterne på den Salesforce-konto, der er angivet i legitimationsoplysningerne. Kontoen forbindes via det angivne miljø `loginUrl`. Hvis der ikke er angivet et miljø, forbindes kontoen med produktionen (https://login.salesforce.com). Der kan angives en valgfri postparameter, `options`, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:

-   `ApiVersion` : Den Salesforce API-version, der skal anvendes til forespørgslen. Når versionen ikke er angivet, anvendes API version 29.0.
-   `Timeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien er kildespecifik.



## Category
Accessing data
