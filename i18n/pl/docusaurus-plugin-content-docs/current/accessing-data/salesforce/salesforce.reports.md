---
title: Salesforce.Reports
---

# Salesforce.Reports


Zwraca raporty z konta usług Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Zwraca raporty z konta usług Salesforce określonego w poświadczeniach. Konto zostanie połączone za pośrednictwem dostarczonego środowiska `loginUrl`. Jeśli nie ma dostarczonego żadnego środowiska, konto zostanie połączone z serwerem produkcyjnym (https://login.salesforce.com). Można podać opcjonalny parametr rekordu (`options`), aby określić dodatkowe właściwości. Rekord ten może zawierać następujące pola:

-   `ApiVersion` : Wersja interfejsu API usługi Salesforce do użycia w tym zapytaniu. Gdy nie zostanie określona, używana będzie wersja 29.0 interfejsu API.
-   `Timeout` : Czas określający, jak długo oczekiwać przed porzuceniem żądania kierowanego do serwera. Wartość domyślna jest zależna od źródła.



## Category
Accessing data
