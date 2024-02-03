---
title: Date.Year
---

# Date.Year


## Description

Retorna o componente de ano.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Retorna o componente de ano do valor <code>datetime</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Localize o ano em #datetime (2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
