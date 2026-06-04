---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Uvozi podatke iz zbirke podatkov storitve Google BigQuery s storitvijo Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, kjer so navedeni projekti, ki so na voljo v storitvi Google BigQuery, s storitvijo Microsoft Entra ID za `ID projekta obračunavanja` . Naveden je lahko izbirni parameter zapisa `možnosti` za nadzor teh možnosti:

-   `ConnectionTimeout`: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je vrednost časovne omejitve povezave ODBC.
-   `CommandTimeout`: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana.
-   `UseStorageApi`: določa, ali bo za velike nabore rezultatov uporabljen vmesnik API shrambe storitve BigQuery. Privzeta vrednost je"true", ki določa uporabo vmesnika API shrambe. Nastavite na"false", če ne želite uporabiti vmesnika API shrambe
-   `AudienceUri`: to je URI občinstva, ki ga lahko gonilnik ODBC uporabi za zahteve za izmenjavo žetonov. To polje mora biti popolnoma določen URI (i.e. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), v katerem je"pool\_id"globalno enolično ime za prepoznavo skupine zaposlenih.

Parameter zapisa je določen kot \[option1 = value1, option2 = value2 ...\].


## Examples

### Example #1
Prikaži projekte, ki so na voljo v storitvi Google BigQuery, z uporabo storitve Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



