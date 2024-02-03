---
title: Binary.ToText
---

# Binary.ToText


## Description

Zakóduje binární data do textového formátu.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Vrátí výsledek převodu binárního seznamu čísel <code>binary</code> na textovou hodnotu. Volitelně může být zadán i parametr <code>encoding</code>, který označuje kódování použité ve vrácené textové hodnotě.      Pro parametr <code>encoding</code> lze použít následující hodnoty <code>BinaryEncoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Kódování Base 64</li>        <li><code>BinaryEncoding.Hex</code>: Šestnáctkové kódování</li>      </ul>



## Category
Binary
