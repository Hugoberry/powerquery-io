---
title: Value.FromText
---

# Value.FromText


## Description

Opretter en typesikker værdi ud fra en tekstrepræsentation.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Afkoder en værdi ud fra en tekstrepræsentation, <code>text</code>, og fortolker den som en værdi med den rette type.    <code>Value.FromText</code> bruger en tekstværdi og returnerer et tal, en logisk værdi, en null-værdi, en dato/klokkeslætsværdi, en varighedsværdi eller en tekstværdi. En tom tekstværdi fortolkes som en null-værdi.    Der kan også angives en valgfri <code>culture</code> (f.ek.s "en-US").



## Category
Text.Conversions from and to text
