---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importuoti duomenis iš „Google BigQuery“ duomenų bazės naudojant „Microsoft Entra ID“


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Pateikiama lentelė, kurioje išvardyti galimi „Google BigQuery“ projektai naudojant „Microsoft Entra ID“, skirtą `„Billing Project ID“` . Galima nurodyti pasirenkamą įrašo parametrą `Parinktys`, kad būtų galima valdyti šias parinktis:

-   `ConnectionTimeout`: trukmė, nurodanti kiek laiko leidžiama bandyti užmegzti ryšį su serveriu prieš nutraukiant bandymą. Numatytoji reikšmė yra ODBC ryšio skirtojo laiko reikšmė.
-   `CommandTimeout`: trukmė, nurodanti kiek laiko leidžiama vykdyti serverio užklausą prieš atšaukiant užklausą.
-   `UseStorageApi`: nurodo, ar didelių rezultatų rinkiniams naudoti „BigQuery“ saugyklos API. Numatytoji reikšmė dėl saugyklos API naudojimo yra teisinga. Jei nenorite, kad būtų naudojama saugyklos API, nustatykite reikšmę klaidinga
-   `AudienceUri`: tai auditorijos URI, kurį ODBC tvarkyklė gali naudoti savo atpažinimo ženklų mainų užklausoms. Šis laukas turi būti visiškai apibrėžtas URI (t. y. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), kur pool\_id yra visuotinai unikalus pavadinimas, nurodantis darbo jėgos telkinį.

Įrašo parametras nurodomas kaip \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Išvardijami „Google BigQuery“ pasiekiami projektai naudojant „Microsoft Entra ID“
```powerquery
GoogleBigQueryAad.Database()
```



