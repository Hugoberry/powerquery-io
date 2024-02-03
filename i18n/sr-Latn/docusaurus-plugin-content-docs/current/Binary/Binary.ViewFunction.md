---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Pravi funkciju koju može da presretne rukovalac definisan u prikazu (pomoću funkcije Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Kreira funkciju prikaza na osnovu <code>function</code> kojom se može rukovati u prikazu koji je kreirala funkcija <code>Binary.View</code>.<br /><code>OnInvoke</code> rukovalac funkcije <code>Binary.View</code> može se koristiti za definisanje rukovaoca za funkciju prikaza.<br />Kao i sa rukovaocima za ugrađene operacije, ako se <code>OnInvoke</code> rukovalac ne navede, ako ne rukuje funkcijom prikaza ili ako rukovalac ne prijavi grešku, <code>function</code> se primenjuje preko prikaza.<br />Pogledajte objavljenu Power Query dokumentaciju prilagođenog konektora za detaljniji opis funkcije <code>Binary.View</code> i funkcija prilagođenog prikaza.<br />



## Category
Binary
