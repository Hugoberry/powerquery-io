---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Evaluează <code>query</code> față de <code>target</code> utilizând parametrii specificați în <code>parameters</code> și opțiunile specificate în <code>options</code>.<br />Ieșirea interogării este definită de <code>target</code>.<br /><code>target</code> furnizează contextul operațiunii descrise de <code>query</code>.<br /><code>query</code> descrie interogarea de executat în raport cu <code>target</code>. <code>query</code> este exprimat într-un mod specific pentru <code>target</code> (de exemplu, o instrucțiune T-SQL).<br />Valoare opțională <code>parameters</code> poate conține fie o listă, fie o înregistrare, după caz, pentru a furniza valorile parametrilor așteptate de <code>query</code>.<br />Înregistrarea <code>options</code> opțională poate conține opțiuni care afectează comportamentul de evaluare al <code>query</code> față de <code>target</code>. Aceste opțiuni sunt specifice pentru <code>target</code>.<br />



## Category
Values
