---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Returnerer Analysis Services-databaser på en bestemt vært.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Returnerer databaser på en Analysis Services-forekomst, <code>server</code>. Der kan angives en valgfri postparameter, <code>options</code>, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:    <ul><li><code>TypedMeasureColumns</code> : En logisk v&#230;rdi, der angiver, om de typer, der er angivet i den flerdimensionelle model eller tabelmodellen, skal bruges til typerne af tilf&#248;jede m&#229;lingskolonner. N&#229;r typen &quot;number&quot; er angivet til false, bruges den til alle m&#229;lingskolonner. Standardv&#230;rdien for denne indstilling er false.</li><li><code>Culture</code> : Et kulturnavn, der angiver datakulturen. Dette svarer til egenskaben for forbindelsesstrengen &#39;landestandard-id&#39;.</li><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien afh&#230;nger af driveren.</li><li><code>ConnectionTimeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien afh&#230;nger af driveren.</li><li><code>SubQueries</code> : Et tal (0, 1 eller 2), der angiver v&#230;rdien for egenskaben &quot;SubQueries&quot; i forbindelsesstrengen. Dette styrer funktionsm&#229;den for beregnede medlemmer i under-select-dels&#230;tninger eller delkuber. (Standardv&#230;rdien er 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
