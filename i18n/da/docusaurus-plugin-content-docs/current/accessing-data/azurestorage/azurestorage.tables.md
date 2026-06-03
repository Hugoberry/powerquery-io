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

Returnerer en navigationstabel, der indeholder en række for hver tabel, der blev fundet på kontoens URL-adresse, `account`, fra en samling af legitimationsoplysninger i Azure Storage. Hver række indeholder et link til Azure-tabellen. En valgfri optagelsesparameter, `options`, kan angives for at vælge yderligere egenskaber. Posten kan indeholde følgende felter:

-   `Timeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien er kildespecifik.



## Category
Accessing data
