---
title: Impala.Database
---

# Impala.Database


## Description

Importuje data z clusteru Impala.


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importuje data z clusteru Impala <code>server</code>. Pokud nebyl zadaný port, použije se výchozí port 21050.


## Examples

### Example #1 
Zobrazí seznam tabulek v clusteru Impala.
```powerquery
Impala.Database("localhost:21050")
```



