---
title: Access.Database
---

# Access.Database


## Description

Vráti znázornenie štruktúry databázy programu Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Vráti znázornenie štruktúry databázy <code>database</code> programu Access. Voliteľný parameter záznamu <code>options</code> je možné zadať na ovládanie nasledujúcich možností:    <ul><li><code>CreateNavigationProperties</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; generovať vlastnosti navig&#225;cie v pr&#237;pade vr&#225;ten&#253;ch hodn&#244;t (predvolen&#225; hodnota je False).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcia, ktor&#225; sa použ&#237;va na tvorbu n&#225;zvov vlastnost&#237; navig&#225;cie.</li></ul>    Parameter záznamu sa zadáva napríklad ako [option1 = value1, option2 = value2...].



## Category
Accessing data
