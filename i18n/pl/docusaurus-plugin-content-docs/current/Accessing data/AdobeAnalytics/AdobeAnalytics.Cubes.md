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

Zwraca tabelę wielowymiarowych pakietów z rozwiązania Adobe Analytics. Można ustawić opcjonalny parametr rekordu <code>options</code>, aby kontrolować następujące opcje:    <ul><li><code>HierarchicalNavigation</code> : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).</li><li><code>MaxRetryCount</code> : Liczba ponownych pr&#243;b do wykonania podczas sondowania wynik&#243;w zapytania. Wartość domyślna to 120.</li><li><code>RetryInterval</code> : Czas między ponownymi pr&#243;bami. Wartość domyślna to 1 sekunda.</li><li><code>Implementation</code> : Określa wersję interfejsu API usługi Adobe Analytics. Prawidłowe wartości to: „2.0”. Wartość domyślna używa interfejsu API w wersji 1.4</li></ul>    



## Category
Accessing data
