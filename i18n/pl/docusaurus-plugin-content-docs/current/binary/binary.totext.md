---
title: Binary.ToText
---

# Binary.ToText


Koduje dane binarne w formie tekstowej.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Zwraca wynik konwersji binarnej listy liczb <code>binary</code> na wartość tekstową. Opcjonalnie można określić parametr <code>encoding</code> w celu wskazania kodowania, które ma być używane w tworzonej wartości tekstowej.      W parametrze <code>encoding</code> można użyć następujących wartości <code>BinaryEncoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: kodowanie Base 64.</li>        <li><code>BinaryEncoding.Hex</code>: kodowanie szesnastkowe.</li>      </ul>



## Category
Binary
