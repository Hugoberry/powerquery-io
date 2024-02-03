---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Returnerar kuberna i en Essbase-instansen grupperade efter Essbase-server.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Returnerar en tabell med kuber grupperade efter Essbase-server från en Essbase-instans på APS-server <code>url</code>. En valfri postparameter <code>options</code> kan anges för att styra följande alternativ:    <ul><li><code>CommandTimeout</code> : En varaktighet som styr hur l&#228;nge fr&#229;gan p&#229; serversidan till&#229;ts k&#246;ra innan den avbryts. Standardv&#228;rdet &#228;r tio minuter.</li></ul>



## Category
Accessing data
