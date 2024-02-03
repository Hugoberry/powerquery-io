---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Zwraca tabelę z tabelami SQL i widokami ze źródła danych OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Zwraca tabelę z tabelami SQL i widokami ze źródła danych OLE DB określonego przez parametry połączenia <code>connectionString</code>. Element <code>connectionString</code> może mieć wartość tekstową lub być rekordem par właściwości i wartości. Wartości właściwości mogą być tekstem lub liczbami. Można podać opcjonalny parametr rekordu (<code>options</code>), aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:    <ul><li><code>CreateNavigationProperties</code> : Wartość logiczna (true/false) określająca, czy na podstawie zwr&#243;conych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcja, kt&#243;ra jest używana do tworzenia nazw właściwości nawigacji.</li><li><code>Query</code> : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestaw&#243;w wynik&#243;w, zwracany jest tylko pierwszy z nich.</li><li><code>HierarchicalNavigation</code> : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to true).</li><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametr&#243;w połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.</li></ul>    Parametr rekordu jest określany na przykład jako [opcja1 = wartość1, opcja2 = wartość2...] lub [Query = "select ..."].



## Category
Accessing data
