---
title: Access.Database
---

# Access.Database


Atgriež Access datu bāzes struktūras attēlojumu.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Tiek atgriezts Access datu bāzes `database`struktūras attēlojums. Var norādīt neobligātu ieraksta parametru `options`, lai kontrolētu tālāk norādītās opcijas.

-   `CreateNavigationProperties` : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “false”).
-   `NavigationPropertyNameGenerator` : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.

Ieraksta parametrs tiek norādīts, piemēram, šādi: \[option1 = value1, option2 = value2...\].



## Category
Accessing data
