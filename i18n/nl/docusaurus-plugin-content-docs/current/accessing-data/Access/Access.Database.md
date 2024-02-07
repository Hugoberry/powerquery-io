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

Hiermee wordt een structurele weergave van een Access-database <code>database</code> geretourneerd. U kunt een optionele recordparameter <code>options</code> opgeven om de volgende opties te bepalen:    <ul><li><code>CreateNavigationProperties</code> : Een logische waarde (true/false) waarmee wordt ingesteld of navigatie-eigenschappen moeten worden gegenereerd op basis van de geretourneerde waarden (de standaardinstelling is false).</li><li><code>NavigationPropertyNameGenerator</code> : Een functie die wordt gebruikt voor het maken van namen voor navigatie-eigenschappen.</li></ul>    De recordparameter wordt bijvoorbeeld opgegeven als [option1 = value1, option2 = value2...].



## Category
Accessing data
