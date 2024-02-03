---
title: Parquet.Document
---

# Parquet.Document


## Description

Atgriež Parquet dokumenta saturu kā tabulu.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Atgriež Parquet dokumenta saturu kā tabulu. Opcijas ietver:    <ul>    <li> <code>TypeMapping</code> : teksta vērtība, kas kontrolē noklusējuma tipa kartējumu, lasot un rakstot failus. Noklusējuma vērtība ir Null, un tiek mēģināts saglabāt pēc iespējas vairāk precizitātes pret sākotnējo tipu. Vērtība "Sql" radīs rezultātus, kas ir visatbilstošākie ar Sql Server.</li>    </ul>



## Category
Piekļuve datiem
