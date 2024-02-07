---
title: Salesforce.Data
---

# Salesforce.Data


Zwraca obiekty z konta usług Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Zwraca obiekty z konta usług Salesforce określonego w poświadczeniach. Konto zostanie połączone za pośrednictwem dostarczonego środowiska <code>loginUrl</code>. Jeśli nie ma dostarczonego żadnego środowiska, konto zostanie połączone z serwerem produkcyjnym (https://login.salesforce.com). Parametr rekordu opcjonalnego <code>options</code> może zostać podany w celu określenia dodatkowych właściwości. Rekord ten może zawierać następujące pola:    <ul><li><code>CreateNavigationProperties</code> : Wartość logiczna (true/false) określająca, czy na podstawie zwr&#243;conych wartości mają być generowane właściwości nawigacji (wartość domyślna to false).</li><li><code>ApiVersion</code> : Wersja interfejsu API usługi Salesforce do użycia w tym zapytaniu. Gdy nie zostanie określona, używana będzie wersja 29.0 interfejsu API.</li><li><code>Timeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem żądania kierowanego do serwera. Wartość domyślna jest zależna od źr&#243;dła.</li></ul>    



## Category
Accessing data
