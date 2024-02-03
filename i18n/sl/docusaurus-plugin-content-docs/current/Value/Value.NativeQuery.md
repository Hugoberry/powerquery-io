---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Ovrednoti poizvedbo v cilju.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

Ovrednoti poizvedbo <code>query</code> v tabeli <code>target</code> s parametri, določenimi v <code>parameters</code>, in možnostmi, določenimi v <code>options</code>.<br />Rezultat poizvedbe določa <code>target</code>.<br /><code>target</code> zagotavlja kontekst za postopek, ki ga opisuje <code>query</code>.<br /><code>query</code> opisuje poizvedbo, ki bo izvedena v tabeli <code>target</code>. <code>query</code> je izražen na način, ki je značilen za <code>target</code> (npr. poizvedba T-SQL).<br />Izbirna vrednost <code>parameters</code> lahko vsebuje seznam ali zapis, kot je primerno, ki zagotavlja vrednosti parametrov, ki jih pričakuje <code>query</code>.<br />Izbirni zapis <code>options</code> lahko vsebuje možnosti, ki vplivajo na način delovanja ovrednotenja poizvedbe <code>query</code> v tabeli <code>target</code>. Te možnosti so značilne za <code>target</code>.<br />



## Category
Values
