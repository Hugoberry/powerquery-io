---
title: Access.Database
---

# Access.Database


Retourneert een structurele weergave van een Access-database.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een structurele weergave van een Access-database `database` geretourneerd. U kunt een optionele recordparameter `options` opgeven voor besturing van de volgende opties:

-   `CreateNavigationProperties` : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is false).
-   `NavigationPropertyNameGenerator` : Een functie die wordt gebruikt voor het maken van namen voor navigatie-eigenschappen.

De recordparameter wordt bijvoorbeeld opgegeven als \[option1 = value1, option2 = value2...\].



## Category
Accessing data
