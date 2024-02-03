---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Деректерді Amazon Redshift дерекқорынан импорттаңыз.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Amazon Redshift кластер серверіндегі (<code>server</code>) <code>database</code> дерекқорындағы кестелерді көрсететін кестені қайтарады.  Келесі параметрлерді басқару үшін міндетті емес жазба параметрі (<code>options</code>) көрсетілуі мүмкін:<ul><li><code>Provider Name</code>: Қосылым үшін провайдер атауы ретінде пайдаланылатын мәтін мәні. Бұл Microsoft аутентификациясын қолданғанда пайдаланылады.</li><li><code>Batch Size</code>: Серверге бір қоңырау шалу арқылы алынатын жолдар саны.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



