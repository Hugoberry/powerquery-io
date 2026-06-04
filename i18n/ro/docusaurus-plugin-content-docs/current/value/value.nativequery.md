---
title: Value.NativeQuery
---

# Value.NativeQuery


Evaluează o interogare pentru o țintă.


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

Evaluează `query` față de `target` utilizând parametrii specificați în `parameters` și opțiunile specificate în `options`.

Ieșirea interogării este definită de `target`.

`target` furnizează contextul operațiunii descrise de `query`.

`query` descrie interogarea de executat în raport cu `target`. `query` este exprimat într-un mod specific pentru `target` (de exemplu, o instrucțiune T-SQL).

Valoare opțională `parameters` poate conține fie o listă, fie o înregistrare, după caz, pentru a furniza valorile parametrilor așteptate de `query`.

Înregistrarea `options` opțională poate conține opțiuni care afectează comportamentul de evaluare al `query` față de `target`. Aceste opțiuni sunt specifice pentru `target`.



## Category
Values
