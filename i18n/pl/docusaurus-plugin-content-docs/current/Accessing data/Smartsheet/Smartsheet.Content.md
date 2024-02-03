---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Zwraca tabelę danych z punktu końcowego indeksu narzędzia Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Tworzy wywołanie interfejsu API REST narzędzia Smartsheet 2.0 w określonym punkcie końcowym i przekształca zwrócony element danych w tabelę.


## Examples

### Example #1 
Ściąga tabelę z informacjami o użytkownikach z interfejsu API narzędzia Smartsheet
```powerquery
Smartsheet.Content("użytkownicy")
```

Result: 
```powerquery
Tabela z informacjami o użytkownikach zwracana przez interfejs API narzędzia Smartsheet
```



