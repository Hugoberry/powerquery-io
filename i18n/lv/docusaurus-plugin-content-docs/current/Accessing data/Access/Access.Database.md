---
title: Access.Database
---

# Access.Database


## Description

Atgriež Access datu bāzes struktūras attēlojumu.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Tiek atgriezts Access datu bāzes <code>database</code> struktūras attēlojums. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai kontrolētu tālāk norādītās opcijas.    <ul><li><code>CreateNavigationProperties</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “false”).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.</li></ul>    Ieraksta parametrs tiek norādīts, piemēram, šādi: [option1 = value1, option2 = value2...].



## Category
Accessing data
