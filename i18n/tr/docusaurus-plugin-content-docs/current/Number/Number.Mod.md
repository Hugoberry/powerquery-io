---
title: Number.Mod
---

# Number.Mod


## Description

Tamsayı iki sayıyı böler ve kalanı döndürür.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

<code>number</code> değerinin <code>divisor</code> değerine tamsayı bölümünden kalanı döndürür.    <code>number</code> veya <code>divisor</code> null ise <code>Number.Mod</code> null döndürür.      <ul>        <li><code>number</code>: Bölünen.</li>        <li><code>divisor</code>: Bölen.</li>      </ul>


## Examples

### Example #1 
5&#39;i 3&#39;e bölmeden kalanı bulur.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
