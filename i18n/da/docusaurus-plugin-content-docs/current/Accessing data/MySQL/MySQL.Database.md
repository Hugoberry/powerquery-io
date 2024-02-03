---
title: MySQL.Database
---

# MySQL.Database


## Description

Returnerer en tabel over SQL-tabeller, visninger og lagrede skalafunktionner, der findes i en MySQL-database.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnerer en tabel over SQL-tabeller, visninger og lagrede skalafunktioner, der er tilgængelige i en MySQL-database på serveren <code>server</code> i den forekomst af databasen, der hedder <code>database</code>. Porten kan eventuelt være angivet med serveren, adskilt af et kolon. Den valgfrie postparameter, <code>options</code>, kan angives for at styre følgende egenskaber:    <ul><li><code>Encoding</code> : En TextEncoding-v&#230;rdi, som angiver det tegns&#230;t, der bruges til at kode alle foresp&#248;rgsler, der sendes til serveren (som standard null).</li><li><code>CreateNavigationProperties</code> : En logisk v&#230;rdi (true/false), der angiver, om der skal genereres navigationsegenskaber p&#229; de returnerede v&#230;rdier (standard er true).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion, der anvendes til at oprette navne til navigationsegenskaber.</li><li><code>Query</code> : En integreret SQL-foresp&#248;rgsel, der anvendes til hentning af data. Hvis foresp&#248;rgslen genererer flere resultats&#230;t, returneres kun det f&#248;rste.</li><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li><li><code>ConnectionTimeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien afh&#230;nger af driveren.</li><li><code>TreatTinyAsBoolean</code> : En logisk v&#230;rdi (true/false), der afg&#248;r, om tinyint-kolonner p&#229; serveren skal gennemtvinges som logiske v&#230;rdier. Standardv&#230;rdien er true.</li><li><code>OldGuids</code> : En logisk v&#230;rdi (true/false), der angiver, om char(36)-kolonner (hvis false) eller binary(16)-kolonner (hvis true) behandles som GUID&#39;er. Standardv&#230;rdien er false.</li><li><code>ReturnSingleDatabase</code> : En logisk v&#230;rdi (true/false), der angiver, om samtlige tabeller i alle databaser skal returneres (hvis false), eller om der skal returneres tabeller og visninger for den angivne database (hvis true). Standardv&#230;rdien er false.</li><li><code>HierarchicalNavigation</code> : En logisk v&#230;rdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).</li></ul>    Postparameteren angives f.eks. som [option1 = value1, option2 = value2...] eller [Query = "select ..."].    



## Category
Accessing data
