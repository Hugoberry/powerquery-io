---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Pravi funkciju koju može da presretne rukovalac definisan u prikazu (pomoću svojstva Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Kreira funkciju prikaza na osnovu <code>function</code> kojom se može rukovati u prikazu koji je kreirala funkcija <code>Table.View</code>.<br /><code>OnInvoke</code> rukovalac funkcije <code>Table.View</code> može se koristiti za definisanje rukovaoca za funkciju prikaza.<br />Kao i sa rukovaocima za ugrađene operacije, ako se <code>OnInvoke</code> rukovalac ne navede, ako ne rukuje funkcijom prikaza ili ako rukovalac ne prijavi grešku, <code>function</code> se primenjuje preko prikaza.<br />Pogledajte objavljenu Power Query dokumentaciju prilagođenog konektora za detaljniji opis funkcije <code>Table.View</code> i funkcija prilagođenog prikaza.<br />



## Category
Table.Table construction
