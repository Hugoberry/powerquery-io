---
title: Binary.ToText
---

# Binary.ToText


## Description

Code les données binaires en texte.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Retourne le résultat de la conversion d'une liste binaire de numéros <code>binary</code> dans une valeur de texte. Au besoin, <code>encoding</code> peut être spécifié pour indiquer le codage à utiliser dans la valeur de texte produite      Les valeurs <code>BinaryEncoding</code> suivantes peuvent être utilisées pour <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code> : codage en base 64</li>        <li><code>BinaryEncoding.Hex</code> : codage hexadécimal</li>      </ul>



## Category
Binary
