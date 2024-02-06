---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Zwraca tabelę z wielowymiarowymi modułami lub modelami tabelarycznymi z bazy danych usług Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę wielowymiarowych modułów lub modeli tabelarycznych z bazy danych usług Analysis Services <code>database</code> na serwerze <code>server</code>. Opcjonalny parametr rekordu (<code>options</code>) pozwala określić następujące opcje:    <ul><li><code>Query</code> : Natywne zapytanie MDX służące do pobierania danych.</li><li><code>TypedMeasureColumns</code> : Wartość logiczna wskazująca, czy typy określone w modelu wielowymiarowym lub tabelarycznym będą używane dla typ&#243;w dodanych kolumn miary. Ustawienie wartości false spowoduje użycie typu „number” dla wszystkich kolumn miary. Wartość domyślna tej opcji to false.</li><li><code>Culture</code> : Nazwa kultury określająca kulturę dla danych. Odpowiada właściwości parametr&#243;w połączenia „Identyfikator ustawień regionalnych”.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.</li><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li><li><code>SubQueries</code> : Liczba (0, 1 lub 2) określająca wartość właściwości „SubQueries” w parametrach połączenia. Ta wartość steruje zachowaniem obliczeniowych element&#243;w członkowskich w podwyborach i modułach podrzędnych. Wartość domyślna to 2.</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
