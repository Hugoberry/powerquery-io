---
title: Sql.Database
---

# Sql.Database


## Description

Returnerer en tabel over SQL-tabeller, visninger og lagrede funktioner fra SQL Server-databasen.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnerer en tabel over SQL-tabeller, visninger og lagrede funktioner fra SQL Server-databasen <code>database</code> på serveren <code>server</code>. Porten kan eventuelt være angivet med serveren, adskilt af et kolon eller et komma. Den valgfrie postparameter, <code>options</code>, kan angives for at styre følgende egenskaber:    <ul><li><code>Query</code> : En integreret SQL-foresp&#248;rgsel, der anvendes til hentning af data. Hvis foresp&#248;rgslen genererer flere resultats&#230;t, returneres kun det f&#248;rste.</li><li><code>CreateNavigationProperties</code> : En logisk v&#230;rdi (true/false), der angiver, om der skal genereres navigationsegenskaber p&#229; de returnerede v&#230;rdier (standard er true).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion, der anvendes til at oprette navne til navigationsegenskaber.</li><li><code>MaxDegreeOfParallelism</code> : Et tal, der angiver v&#230;rdien for dels&#230;tningen i &quot;maxdop&quot;-foresp&#248;rgslen i den genererede SQL-foresp&#248;rgsel.</li><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li><li><code>ConnectionTimeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien afh&#230;nger af driveren.</li><li><code>HierarchicalNavigation</code> : En logisk v&#230;rdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).</li><li><code>MultiSubnetFailover</code> : En logisk v&#230;rdi (true/false), der angiver v&#230;rdien af egenskaben &quot;MultiSubnetFailover&quot; i forbindelsesstrengen (standard er false).</li><li><code>UnsafeTypeConversions</code> : En logisk v&#230;rdi (sand/falsk), som, hvis sand, fors&#248;ger at folde typekonverteringer, som kan mislykkes, og som medf&#248;rer, at hele foresp&#248;rgslen mislykkes. Anbefales ikke til generel brug.</li><li><code>ContextInfo</code> : En bin&#230;r v&#230;rdi, der bruges til at angive CONTEXT_INFO, f&#248;r hver kommando k&#248;res.</li><li><code>OmitSRID</code> : En logisk v&#230;rdi (sand/falsk), som, hvis sand, udelader SRID, n&#229;r der dannes Well-Known Text fra geometri- og geografityper.</li><li><code>EnableCrossDatabaseFolding</code> : En logisk v&#230;rdi (sand/falsk), som, hvis sand, tillader foresp&#248;rgselsdelegering p&#229; tv&#230;rs af databaser p&#229; den samme server. Standardv&#230;rdien er falsk.</li></ul>    Postparameteren angives f.eks. som [option1 = value1, option2 = value2...] eller [Query = "select ..."].    



## Category
Accessing data
