---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Uvozite podatke iz zbirke podatkov storitve Google BigQuery s storitvijo Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Vrne tabelo, v kateri so navedeni projekti, ki so na voljo v storitvi Google BigQuery, z uporabo storitve Azure AD za <code>ID obračunavanja projekta</code>. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti      <ul>        <li><code>ConnectionTimeout</code>: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je vrednost izteka povezave z ODBC.</li>        <li><code>CommandTimeout</code>: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana.</li>        <li><code>UseStorageApi</code>: določa, ali bo za velike nabore rezultatov uporabljen vmesnik API shrambe storitve BigQuery. Privzeta vrednost je "true" in določa uporabo vmesnika API shrambe. Nastavite na "false", če ne želite uporabiti vmesnika API shrambe.</li>        <li><code>AudienceUri</code>: to je URI občinstva, ki ga lahko gonilnik ODBC uporabi za svoje zahteve za izmenjavo žetonov. To polje mora biti popolnoma določen URI (npr. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread), kjer je pool_id globalno enolično ime za prepoznavo skupine zaposlenih.</li>      </ul>    Parameter zapisa je na primer naveden kot [možnost1 = vrednost1, možnost2 = vrednost2 ...].    


## Examples

### Example #1 
Prikažite projekte, ki so na voljo v storitvi Google BigQuery, z uporabo storitve Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



