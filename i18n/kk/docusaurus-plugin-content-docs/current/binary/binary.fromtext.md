---
title: Binary.FromText
---

# Binary.FromText


Деректерді мәтіндік түрден екілік түрге кодсыздандырады.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

`text` мәтіндік мәнін екілік мәнге (`number` тізімі) түрлендіру нәтижесін қайтарады. `encoding` мәтіндік мәнде пайдаланылатын кодтауды көрсету үшін көрсетуге болады. Келесі `BinaryEncoding` мәндерін `encoding` үшін пайдалануға болады.

-   `BinaryEncoding.Base64`: Base 64 кодтау
-   `BinaryEncoding.Hex`: он алтылық кодтау


## Examples

### Example #1
"1011" мәнін екілік мәнге кодсыздандыру.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
"1011" мәнін он алтылық кодтаумен екілік мәнге түрлендіру.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
