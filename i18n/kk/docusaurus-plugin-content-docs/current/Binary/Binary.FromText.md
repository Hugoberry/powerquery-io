---
title: Binary.FromText
---

# Binary.FromText


## Description

Деректерді мәтіндік түрден екілік түрге кодсыздандырады.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

<code>text</code> мәтіндік мәнін екілік мәнге (<code>number</code> тізімі) түрлендіру нәтижесін қайтарады. <code>encoding</code> мәтіндік мәнде пайдаланылатын кодтауды көрсету үшін көрсетуге болады.      Келесі <code>BinaryEncoding</code> мәндерін <code>encoding</code> үшін пайдалануға болады.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 кодтау</li>        <li><code>BinaryEncoding.Hex</code>: он алтылық кодтау</li>      </ul>


## Examples

### Example #1 
&#34;1011&#34; мәнін екілік мәнге кодсыздандыру.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
&#34;1011&#34; мәнін он алтылық кодтаумен екілік мәнге түрлендіру.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
