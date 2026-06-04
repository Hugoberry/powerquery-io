---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importați date dintr-o bază de date Google BigQuery utilizând Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel în care sunt listate proiectele disponibile în Google BigQuery utilizând Microsoft Entra ID pentru `ID de proiect de facturare`. Poate fi specificat un parametru opțional al înregistrării, `options`, pentru a controla următoarele opțiuni:

-   `ConnectionTimeout`: O durată care controlează cât timp se așteaptă înainte de a abandona încercarea de a face o conexiune la server. Valoarea implicită este timpul de expirare pentru conexiunea ODBC.
-   `CommandTimeout`: O durată care controlează cât timp este permisă rularea interogării pe partea de server înainte de anulare.
-   `UseStorageApi`: Specifică dacă se utilizează API-ul de stocare BigQuery pentru seturi mari de rezultate. Valoarea implicită este True pentru a utiliza API-ul de stocare. Setați la False pentru a nu utiliza API-ul de stocare
-   `AudienceUri`: Acesta este URI-ul pentru audiență pe care driverul ODBC îl poate utiliza pentru solicitările sale de schimb de tokenuri. Acest câmp trebuie să fie un URI complet calificat (de exemplu, //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), unde pool\_id este un nume unic global pentru a identifica grupul de forț de muncă.

Parametrul înregistrării este specificat ca \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Listați proiectele disponibile în Google BigQuery utilizând Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



