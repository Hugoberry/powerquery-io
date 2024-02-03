---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Importuoti duomenis iš „Google BigQuery“ duomenų bazės naudojant „Azure Active Directory“


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Pateikiama lentelė su „Google BigQuery“ pasiekiamais projektais <code>Billing Project ID</code> naudojant „Azure AD“. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code> toliau nurodytoms parinktims valdyti:      <ul>        <li><code>ConnectionTimeout</code>: trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė – ODBC ryšio skirtojo laiko reikšmė.</li>        <li><code>CommandTimeout</code>: trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant.</li>        <li> <code>UseStorageApi</code>: nurodoma, ar dideliems rezultatų rinkiniams naudoti „BigQuery“ saugyklos API. Numatytoji saugyklos API naudojimo reikšmė yra teisinga. Jei nenorite naudoti saugyklos API, reikšmę nustatykite kaip klaidingą</li>        <li> <code>AudienceUri</code>: tai auditorijos URI, kurį ODBC tvarkyklė gali naudoti savo atpažinimo ženklų mainų užklausoms. Šis laukas turi būti visiškai apibrėžtas URI (t. y. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread), kur pool_id yra visuotinai unikalus pavadinimas, skirtas darbo jėgos telkiniui identifikuoti.</li>      </ul>    Įrašo parametras nurodomas kaip [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Išvardijami „Google BigQuery“ pasiekiami projektai naudojant „Azure AD“
```powerquery
GoogleBigQueryAad.Database()
```



