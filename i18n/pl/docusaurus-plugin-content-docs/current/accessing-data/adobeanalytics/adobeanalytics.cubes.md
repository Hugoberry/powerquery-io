---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Zwraca pakiety raportów w rozwiązaniu Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Zwraca tabelę wielowymiarowych pakietów z rozwiązania Adobe Analytics. Można ustawić opcjonalny parametr rekordu `options`, aby kontrolować następujące opcje:

-   `HierarchicalNavigation` : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).
-   `MaxRetryCount` : Liczba ponownych prób do wykonania podczas sondowania wyników zapytania. Wartość domyślna to 120.
-   `RetryInterval` : Czas między ponownymi próbami. Wartość domyślna to 1 sekunda.
-   `Implementation` : Określa wersję interfejsu API usługi Adobe Analytics. Prawidłowe wartości to: „2.0”. Wartość domyślna używa interfejsu API w wersji 1.4



## Category
Accessing data
