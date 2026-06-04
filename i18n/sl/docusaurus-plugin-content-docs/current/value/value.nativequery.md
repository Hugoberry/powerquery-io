---
title: Value.NativeQuery
---

# Value.NativeQuery


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


## Remarks

Ovrednoti poizvedbo `query` v tabeli `target` s parametri, določenimi v `parameters`, in možnostmi, določenimi v `options`.

Rezultat poizvedbe določa `target`.

`target` zagotavlja kontekst za postopek, ki ga opisuje `query`.

`query` opisuje poizvedbo, ki bo izvedena v tabeli `target`. `query` je izražen na način, ki je značilen za `target` (npr. poizvedba T-SQL).

Izbirna vrednost `parameters` lahko vsebuje seznam ali zapis, kot je primerno, ki zagotavlja vrednosti parametrov, ki jih pričakuje `query`.

Izbirni zapis `options` lahko vsebuje možnosti, ki vplivajo na način delovanja ovrednotenja poizvedbe `query` v tabeli `target`. Te možnosti so značilne za `target`.



## Category
Values
