---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Деректерді Amazon Redshift дерекқорынан импорттаңыз.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Amazon Redshift кластер серверіндегі (`server`) `database` дерекқорындағы кестелерді көрсететін кестені қайтарады. `options` деген міндетті емес жазба параметрін келесі параметрлерді басқару үшін көрсетуге болады:

-   `Провайдердің атауы`: қосылым үшін провайдер атауы ретінде пайдаланылатын мәтіндік мән. Бұл Microsoft аутентификациясын пайдаланған кезде пайдаланылады.
-   `Жиынтықтың өлшемі`: серверге бір шақырудан алынатын жолдар саны.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



