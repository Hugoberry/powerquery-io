---
title: Impala.Database
---

# Impala.Database


## Description

Importē datus no Impala klastera.


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importē datus Impala klastera <code>server</code>. Ja ports netika norādīts, tiks izmantots noklusējuma ports 21050.


## Examples

### Example #1 
Norādītas Impala klasterī pieejamās tabulas.
```powerquery
Impala.Database("localhost:21050")
```



