---
title: Impala.Database
---

# Impala.Database


## Description

Tuo tiedot Impala-klusterista


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Tuo tiedot Impala-klusterista <code>server</code>. Jos porttia ei määritetty, käytetään oletusporttia 21050.


## Examples

### Example #1 
Näytä luettelo Impala-klusterin taulukoista.
```powerquery
Impala.Database("localhost:21050")
```



