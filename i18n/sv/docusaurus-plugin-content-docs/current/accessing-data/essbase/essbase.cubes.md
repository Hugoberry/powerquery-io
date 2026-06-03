---
title: Essbase.Cubes
---

# Essbase.Cubes


Returnerar kuberna i en Essbase-instansen grupperade efter Essbase-server.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med kuber grupperade efter Essbase-server från en Essbase-instans på APS-server `url`. En valfri postparameter `options` kan anges för att styra följande alternativ:

-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.



## Category
Accessing data
