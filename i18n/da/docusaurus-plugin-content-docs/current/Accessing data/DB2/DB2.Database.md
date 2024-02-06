---
title: DB2.Database
---

# DB2.Database


Returnerer en tabel over de SQL-tabeller og -visninger, der er tilgængelige i en Db2-database.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel over SQL-tabeller og visninger, der er tilgængelige i en Db2-database på serveren <code>server</code> i den forekomst af databasen, der hedder <code>database</code>. Porten kan valgfrit angives med serveren, hvor de er adskilt af et kolon. En valgfri postparameter, <code>options</code>, kan angives for at styre følgende valgmuligheder:    <ul><li><code>CreateNavigationProperties</code> : En logisk v&#230;rdi (true/false), der angiver, om der skal genereres navigationsegenskaber p&#229; de returnerede v&#230;rdier (standard er true).</li><li><code>NavigationPropertyNameGenerator</code> : En funktion, der anvendes til at oprette navne til navigationsegenskaber.</li><li><code>Query</code> : En integreret SQL-foresp&#248;rgsel, der anvendes til hentning af data. Hvis foresp&#248;rgslen genererer flere resultats&#230;t, returneres kun det f&#248;rste.</li><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li><li><code>ConnectionTimeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien afh&#230;nger af driveren.</li><li><code>HierarchicalNavigation</code> : En logisk v&#230;rdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).</li><li><code>Implementation</code> : Angiver, hvilken implementering af den interne databaseprovider der skal bruges. Gyldige v&#230;rdier: &quot;IBM&quot; og &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Et tal for CCSID&#39;et (Coded Character Set Identifier) til afkodning af bin&#230;re Db2 FOR BIT-data til tegnstrenge. G&#230;lder for Implementation = “Microsoft”. Angiv 0 for at deaktivere konvertering (standard). Angiv til 1 for at konvertere p&#229; baggrund af databasekodning. Angiv et andet CCSID-tal for at konvertere til programkodning.</li><li><code>PackageCollection</code> : Angiver en strengev&#230;rdi for pakkesamling (standardv&#230;rdien er &quot;NULLID&quot;) for at muligg&#248;re anvendelsen af delte pakker, der kr&#230;ves for at behandle SQL-s&#230;tninger. G&#230;lder for Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Angiver, om forbindelsen oprettes via en Db2 Connect-gateway. G&#230;lder for implementering = &quot;Microsoft&quot;.</li></ul>    Postparameteren angives f.eks. som [option1 = value1, option2 = value2...] eller [Query = "vælg ..."] for eksempel.    



## Category
Accessing data
