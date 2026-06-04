---
title: Hdfs.Files
---

# Hdfs.Files


Returnează un tabel ce conţine proprietăţile şi conţinutul fişierelor găsite în folderul şi subfolderele specificate dintr-un sistem de fişiere Hadoop.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Remarks

Returnează un tabel ce conţine un rând pentru fiecare folder şi fişier găsit în adresa URL a folderului, `url`, şi subfoldere dintr-un sistem de fişiere Hadoop. Fiecare rând conţine proprietăţi ale fişierului şi un link la conţinutul său.



## Category
Accessing data
