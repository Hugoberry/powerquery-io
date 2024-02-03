---
title: Binary.FromText
---

# Binary.FromText


## Description

Dekóduje data z textové formy do binární hodnoty.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Vrátí výsledek převodu textové hodnoty <code>text</code> na binární hodnotu (seznam položek <code>number</code>). Může být zadán i parametr <code>encoding</code>, který označuje kódování použité v textové hodnotě.      Pro parametr <code>encoding</code> lze použít následující hodnoty <code>BinaryEncoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Kódování Base 64</li>        <li><code>BinaryEncoding.Hex</code>: Šestnáctkové kódování</li>      </ul>


## Examples

### Example #1 
Dekódovat &#34;1011&#34; na binární hodnotu
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Dekódovat &#34;1011&#34; na binární hodnotu s šestnáctkovým kódováním
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
