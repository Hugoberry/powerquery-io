---
title: Binary.ToText
---

# Binary.ToText


Екілік деректерді мәтіндік пішінге кодтайды.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

`binary` екілік сандар тізімін мәтіндік мәнге түрлендіру нәтижесін қайтарады. Таңдау бойынша, алынған мәтіндік мәнде пайдаланылатын кодтауды көрсету үшін `encoding` көрсетуге болады Келесі `BinaryEncoding` мәндерін `encoding` үшін пайдалануға болады.

-   `BinaryEncoding.Base64`: Base 64 кодтау
-   `BinaryEncoding.Hex`: он алтылық кодтау



## Category
Binary
