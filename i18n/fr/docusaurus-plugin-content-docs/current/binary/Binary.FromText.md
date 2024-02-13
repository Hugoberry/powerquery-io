---
title: Binary.FromText
---

# Binary.FromText


Décode les données d&#39;un texte en binaire.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Retourne le résultat de la conversion de la valeur de texte <code>text</code> dans une valeur binaire (liste de <code>number</code>). <code>encoding</code> peut être spécifié pour indiquer le codage utilisé dans la valeur de texte.      Les valeurs <code>BinaryEncoding</code> suivantes peuvent être utilisées pour <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code> : codage en base 64</li>        <li><code>BinaryEncoding.Hex</code> : codage hexadécimal</li>      </ul>


## Examples

### Example #1 
Décode &#34; 1011 &#34; en binaire.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Décode &#34; 1011 &#34; en binaire avec un codage hexadécimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
