---
title: Binary.ToText
---

# Binary.ToText


## Description

Екілік деректерді мәтіндік пішінге кодтайды.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

<code>binary</code> екілік сандар тізімін мәтіндік мәнге түрлендіру нәтижесін қайтарады. Таңдау бойынша, алынған мәтіндік мәнде пайдаланылатын кодтауды көрсету үшін <code>encoding</code> көрсетуге болады      Келесі <code>BinaryEncoding</code> мәндерін <code>encoding</code> үшін пайдалануға болады.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 кодтау</li>        <li><code>BinaryEncoding.Hex</code>: он алтылық кодтау</li>      </ul>



## Category
Binary
