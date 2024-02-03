---
title: Impala.Database
---

# Impala.Database


## Description

Import údajov z klastra Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Import údajov z klastra Impala <code>č. \{0}</code>. Ak nebol zadaný žiaden port, použije sa predvolený port 21050.


## Examples

### Example #1 
Zobrazenie zoznamu tabuliek v klastri Impala.
```powerquery
Impala.Database("localhost:21050")
```



