---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Returnerer en navigationstabel, der indeholder de tabeller, der blev fundet i den angivne konto, fra en samling af legitimationsoplysninger i Azure storage.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Returnerer en navigationstabel, der indeholder en række for hver tabel, der blev fundet på kontoens URL-adresse, <code>account</code>, fra en Azure-lagerboks. Hver række indeholder et link til Azure-tabellen. Der kan angives en valgfri postparameter, <code>options</code>, for at specificere yderligere egenskaber. Posten kan indeholde følgende felter:    <ul><li><code>Timeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien er kildespecifik.</li></ul>



## Category
Accessing data
