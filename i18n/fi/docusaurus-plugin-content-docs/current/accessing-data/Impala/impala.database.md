---
title: Impala.Database
---

# Impala.Database


Tuo tiedot Impala-klusterista


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Tuo tiedot Impala-klusterista `server`. Jos porttia ei määritetty, käytetään oletusporttia 21050.


## Examples

### Example #1
Näytä luettelo Impala-klusterin taulukoista.
```powerquery
Impala.Database("localhost:21050")
```



