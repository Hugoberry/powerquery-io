---
title: Table.ViewFunction
---

# Table.ViewFunction


Pravi funkciju koju može da presretne rukovalac definisan u prikazu (pomoću svojstva Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Kreira funkciju prikaza na osnovu `function` kojom se može rukovati u prikazu koji je kreirala funkcija `Table.View`.

`OnInvoke` rukovalac funkcije `Table.View` može se koristiti za definisanje rukovaoca za funkciju prikaza.

Kao i sa rukovaocima za ugrađene operacije, ako se `OnInvoke` rukovalac ne navede, ako ne rukuje funkcijom prikaza ili ako rukovalac ne prijavi grešku, `function` se primenjuje preko prikaza.

Pogledajte objavljenu Power Query dokumentaciju prilagođenog konektora za detaljniji opis funkcije `Table.View` i funkcija prilagođenog prikaza.



## Category
Table.Table construction
