---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Tilføjer en ny kolonne med repræsentative værdier, der er fremstillet af fuzzy-grupperingsværdier i den angivne kolonne i tabellen.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Tilføjer en ny kolonne <code>newColumnName</code> til <code>table</code> med repræsentative værdier for <code>columnName</code>. Repræsentanterne hentes sammen med fuzzily-matchende værdier i <code>columnName</code> for hver række.    Der kan inkluderes et valgfrit sæt af <code>options</code> for at angive, hvordan nøglekolonnerne skal sammenlignes. Indstillingerne omfatter:     <ul><li><code>Culture</code> : G&#248;r det muligt at gruppere poster baseret p&#229; kulturspecifikke regler. Det kan v&#230;re et vilk&#229;rligt gyldigt kulturnavn. En kulturindstilling af typen &quot;ja-JP&quot; grupperer for eksempel p&#229; basis af den japanske kultur. Standardv&#230;rdien er &quot;&quot;, hvilket grupperer baseret p&#229; den engelske (invariable) kultur.</li><li><code>IgnoreCase</code> : En logisk v&#230;rdi (sand/falsk), der tillader skelnen mellem store og sm&#229; bogstaver. Hvis v&#230;rdien er sand, bliver &quot;druer&quot; grupperet med &quot;druer&quot;. Standardv&#230;rdien er sand.</li><li><code>IgnoreSpace</code> : En logisk v&#230;rdi (sand/falsk), der g&#248;r det muligt at kombinere tekstdele for at finde grupper. Hvis true, bliver &quot;Dru er &quot; grupperet med &quot;druer&quot;. Standardv&#230;rdien er sand.</li><li><code>SimilarityColumnName</code> : Et navn p&#229; kolonnen, der viser ligheden mellem en inputv&#230;rdi og den repr&#230;sentative v&#230;rdi for inputtet. Standardv&#230;rdien er null, hvilket betyder, at der ikke tilf&#248;jes en ny kolonne for ligheder.</li><li><code>Threshold</code> : Et tal mellem 0,00 og 1,00, der angiver den lighedsscore, hvor to v&#230;rdier grupperes.    For eksempel er &quot;druer&quot; og &quot;drer&quot; (manglende &quot;u&quot;) kun grupperes sammen, hvis denne indstilling er angivet til mindre end 0,90.    En gr&#230;nsev&#230;rdi p&#229; 1,00 tillader kun eksakte match.    (Bem&#230;rk, at et fuzzy &quot;eksakt match&quot; kan ignorere forskelle som f.eks. store og sm&#229; bogstaver, ordr&#230;kkef&#248;lge og tegns&#230;tning.)    Standardv&#230;rdien er 0,80.</li><li><code>TransformationTable</code> : En tabel, der tillader gruppering af poster baseret p&#229; brugerdefinerede v&#230;rditilknytninger. Den skal indeholde kolonnerne &quot;fra&quot; og &quot;til&quot;. For eksempel bliver &quot;Druer&quot; grupperet med &quot;Rosiner&quot;, hvis der findes en transformationstabel med kolonnen &quot;fra&quot;, som indeholder &quot;Druer&quot;, og kolonnen &quot;til&quot;, der indeholder &quot;Rosiner&quot;. Bem&#230;rk, at transformationen bliver anvendt p&#229; alle forekomster af teksten i transformationstabellen. Med ovenst&#229;ende transformationstabel bliver &quot;Druer er s&#248;de&quot; ogs&#229; grupperet med &quot;Rosiner er s&#248;de&quot;.</li></ul><br />    


## Examples

### Example #1 
Find de repræsentative værdier for medarbejderens placering.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
