---
title: Smartsheet.Query
---

# Smartsheet.Query


Zwraca wynik żądania JSON z interfejsu API narzędzia Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

Tworzy wywołanie interfejsu API REST narzędzia Smartsheet 2.0 w określonym punkcie końcowym i zwraca wyniki w postaci rekordu JSON.


## Examples

### Example #1 
Ściąga dane z punktu końcowego interfejsu API narzędzia Smartsheet dla arkuszy z określonymi dodatkowymi argumentami
```powerquery
Smartsheet.Content("arkusze", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Tabela z informacjami o arkuszach zwracana przez interfejs API narzędzia Smartsheet
```



