---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

Zwraca tabelę z kluczowymi metrykami rozwiązania Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Tworzy wywołanie punktu końcowego kluczowych metryk rozwiązania Webtrends i zwraca wszystkie dane w postaci tabeli.


## Examples

### Example #1 
Ściąga tabelę kluczowych metryk dzierżawy 98765 z ostatnich 30 dni
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Tabela kluczowych metryk
```



