---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Retourneerd de rapportsuites in Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Hiermee wordt een tabel met multidimensionale pakketten geretourneerd uit de Adobe Analytics. U kunt een optionele recordparameter <code>options</code> opgeven om de volgende opties te bepalen:    <ul><li><code>HierarchicalNavigation</code> : Een logische waarde (true/false) waarmee wordt ingesteld of de tabellen gegroepeerd op de schemanamen moeten worden weergegeven (de standaardinstelling is false).</li><li><code>MaxRetryCount</code> : Het aantal nieuwe pogingen om uit te voeren wanneer wordt nagevraagd naar de resultaten van de query. De standaardwaarde is 120.</li><li><code>RetryInterval</code> : De tijdsduur tussen nieuwe pogingen. De standaardwaarde is 1 seconde.</li><li><code>Implementation</code> : Hiermee geeft u de Adobe Analytics API-versie op. Geldige waarden zijn: 2.0. Standaard wordt API-versie 1.4 gebruikt.</li></ul>    



## Category
Accessing data
