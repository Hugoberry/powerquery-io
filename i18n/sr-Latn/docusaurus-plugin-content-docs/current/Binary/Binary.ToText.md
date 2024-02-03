---
title: Binary.ToText
---

# Binary.ToText


## Description

Kodira binarne podatke u tekstualni oblik.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Vraća rezultat konvertovanja binarne liste brojeva <code>binary</code> u tekstualnu vrednost. Opcionalno, <code>encoding</code> može da bude naveden da bi ukazivao na kodiranje koje treba koristiti u dobijenoj tekstualnoj vrednosti      Sledeće <code>BinaryEncoding</code> vrednosti se mogu koristiti za <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 kodiranje</li>        <li><code>BinaryEncoding.Hex</code>: Heksadecimalno kodiranje</li>      </ul>



## Category
Binary
