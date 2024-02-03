---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Zwraca bazy danych usług Analysis Services na konkretnym hoście.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Zwraca bazy danych z wystąpienia usług Analysis Services <code>server</code>. Można podać opcjonalny parametr rekordu <code>options</code> w celu określenia dodatkowych właściwości. Rekord może zawierać następujące pola:    <ul><li><code>TypedMeasureColumns</code> : Wartość logiczna wskazująca, czy typy określone w modelu wielowymiarowym lub tabelarycznym będą używane dla typ&#243;w dodanych kolumn miary. Ustawienie wartości false spowoduje użycie typu „number” dla wszystkich kolumn miary. Wartość domyślna tej opcji to false.</li><li><code>Culture</code> : Nazwa kultury określająca kulturę dla danych. Odpowiada właściwości parametr&#243;w połączenia „Identyfikator ustawień regionalnych”.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.</li><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li><li><code>SubQueries</code> : Liczba (0, 1 lub 2) określająca wartość właściwości „SubQueries” w parametrach połączenia. Ta wartość steruje zachowaniem obliczeniowych element&#243;w członkowskich w podwyborach i modułach podrzędnych. Wartość domyślna to 2.</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
