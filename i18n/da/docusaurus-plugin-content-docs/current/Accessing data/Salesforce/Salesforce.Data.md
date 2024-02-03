---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Returnerer objekter fra Salesforce-kontoen.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Returnerer objekterne på den Salesforce-konto, der er angivet i legitimationsoplysningerne. Kontoen forbindes via det angivne miljø <code>loginUrl</code>. Hvis der ikke er angivet et miljø, forbindes kontoen med produktionen (https://login.salesforce.com). Der kan angives en valgfri postparameter, <code>options</code>, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:    <ul><li><code>CreateNavigationProperties</code> : En logisk v&#230;rdi (true/false), der angiver, om der skal genereres navigationsegenskaber p&#229; de returnerede v&#230;rdier (standard er false).</li><li><code>ApiVersion</code> : Den Salesforce API-version, der skal anvendes til foresp&#248;rgslen. N&#229;r versionen ikke er angivet, anvendes API version 29.0.</li><li><code>Timeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien er kildespecifik.</li></ul>    



## Category
Accessing data
