---
title: Value.FromText
---

# Value.FromText


Crea un valore fortemente tipizzato da una rappresentazione testuale.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodifica un valore dalla rappresentazione testuale <code>text</code>e lo interpreta come valore con un tipo appropriato.    <code>Value.FromText</code> accetta un valore di testo e restituisce un numero, un valore logico, un valore Null, un valore datetime, un valore di durata o un valore di testo. Il valore di testo vuoto viene interpretato come valore Null.    È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".



## Category
Text.Conversions from and to text
