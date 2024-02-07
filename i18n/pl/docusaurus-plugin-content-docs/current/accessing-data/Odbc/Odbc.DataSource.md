---
title: Odbc.DataSource
---

# Odbc.DataSource


Zwraca tabelę z tabelami SQL i widokami ze źródła danych ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę z tabelami SQL i widokami ze źródła danych ODBC określonego za pomocą parametrów połączenia <code>connectionString</code>. Parametry połączenia <code>connectionString</code> mogą być tekstem lub rekordem z parami właściwość-wartość. Wartości właściwości mogą być tekstem lub liczbą. Można podać opcjonalny parametr rekordu <code>options</code>, aby określić dodatkowe parametry. Rekord może zawierać następujące pola:    <ul><li><code>CreateNavigationProperties</code> : Wartość logiczna (true/false) określająca, czy na podstawie zwr&#243;conych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).</li><li><code>HierarchicalNavigation</code> : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).</li><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna to 15 sekund.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametr&#243;w połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.</li></ul>


## Examples

### Example #1 
Zwróć tabele i widoki SQL z podanych parametrów połączenia.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
