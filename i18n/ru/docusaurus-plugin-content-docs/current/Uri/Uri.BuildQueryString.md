---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Соберите запись в строку запроса универсального кода ресурса.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Соберите запись <code>query</code> в строку запроса универсального кода ресурса, при необходимости добавив escape-символы.


## Examples

### Example #1 
Закодируйте строку запроса, которая содержит специальные символы.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
