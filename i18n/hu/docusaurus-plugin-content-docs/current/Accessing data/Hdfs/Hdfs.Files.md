---
title: Hdfs.Files
---

# Hdfs.Files


## Description

Egy olyan táblát ad vissza, amely egy Hadoop-fájlrendszer megadott mappájában és annak almappáiban levő fájlok tulajdonságait és tartalmát tartalmazza.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Details

Egy olyan táblát ad vissza, amely egy sort tartalmaz egy Hadoop-fájlrendszer következő URL-címen levő mappájában és annak almappáiban található mindegyik fájlhoz: <code>url</code>. Mindegyik sor tartalmazza az adott fájl tulajdonságait és a tartalmára mutató hivatkozást.



## Category
Accessing data
