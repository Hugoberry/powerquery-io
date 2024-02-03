---
title: Access.Database
---

# Access.Database


## Description

Returnează o reprezentare structurală a unei baze de date Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Returnează o reprezentare structurală a unei baze de date Access, <code>database</code>. Poate fi specificat un parametru de înregistrare opțional, <code>options</code>, pentru a controla următoarele opțiuni:    <ul><li><code>CreateNavigationProperties</code> : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este false).</li><li><code>NavigationPropertyNameGenerator</code> : O funcție utilizată pentru crearea numelor proprietăților de navigare.</li></ul>    De exemplu, parametrul de înregistrare este specificat ca [opțiune1 = valoare1, opțiune2 = valoare2...].



## Category
Accessing data
