---
title: OleDb.DataSource
---

# OleDb.DataSource


Returnerer en tabel med SQL-tabeller og visninger fra OLE DB-datakilden.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel med SQL-tabeller og visninger fra den OLE DB-datakilde, der er angivet i forbindelsesstrengen <code>connectionString</code>. <code>connectionString</code> kan være tekst eller en post med egenskabsværdipar. Egenskabsværdier kan enten være en tekst eller et tal. Der kan angives en valgfri postparameter, <code>options</code>, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:    <ul><li><code>CreateNavigationProperties</code> : En logisk v&#230;rdi (true/false), der angiver, om der skal genereres navigationsegenskaber p&#229; de returnerede v&#230;rdier (standard er true).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion, der anvendes til at oprette navne til navigationsegenskaber.</li><li><code>Query</code> : En integreret SQL-foresp&#248;rgsel, der anvendes til hentning af data. Hvis foresp&#248;rgslen genererer flere resultats&#230;t, returneres kun det f&#248;rste.</li><li><code>HierarchicalNavigation</code> : En logisk v&#230;rdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er true).</li><li><code>ConnectionTimeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien afh&#230;nger af driveren.</li><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li><li><code>SqlCompatibleWindowsAuth</code> : En logisk v&#230;rdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardv&#230;rdien er true.</li></ul>    Postparameteren angives f.eks. som [option1 = value1, option2 = value2...] eller [Query = "select ..."].



## Category
Accessing data
