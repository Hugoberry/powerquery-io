---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Zwraca raporty z konta usług Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Zwraca raporty z konta usług Salesforce określonego w poświadczeniach. Konto zostanie połączone za pośrednictwem dostarczonego środowiska <code>loginUrl</code>. Jeśli nie ma dostarczonego żadnego środowiska, konto zostanie połączone z serwerem produkcyjnym (https://login.salesforce.com). Można podać opcjonalny parametr rekordu (<code>options</code>), aby określić dodatkowe właściwości. Rekord ten może zawierać następujące pola:    <ul><li><code>ApiVersion</code> : Wersja interfejsu API usługi Salesforce do użycia w tym zapytaniu. Gdy nie zostanie określona, używana będzie wersja 29.0 interfejsu API.</li><li><code>Timeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem żądania kierowanego do serwera. Wartość domyślna jest zależna od źr&#243;dła.</li></ul>    



## Category
Accessing data
