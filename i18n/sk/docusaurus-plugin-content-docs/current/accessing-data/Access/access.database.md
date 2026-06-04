---
title: Access.Database
---

# Access.Database


Vráti znázornenie štruktúry databázy programu Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Vráti znázornenie štruktúry databázy `database` programu Access. Voliteľný parameter záznamu, `options`, je možné zadať na ovládanie nasledujúcich možností:

-   `CreateNavigationProperties` : Logická hodnota (True/False), ktorá nastavuje, či sa majú generovať vlastnosti navigácie v prípade vrátených hodnôt (predvolená hodnota je False).
-   `NavigationPropertyNameGenerator` : Funkcia, ktorá sa používa na tvorbu názvov vlastností navigácie.

Parameter záznamu je zadaný vo forme \[option1 = value1, option2 = value2...\], napríklad.



## Category
Accessing data
