---
title: Impala.Database
---

# Impala.Database


## Description

從 Impala 叢集匯入資料


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

從 Impala 叢集 <code>server</code> 匯入資料。若未指定連接埠，將使用預設連接埠 21050。


## Examples

### Example #1 
列出 Impala 叢集中的資料表。
```powerquery
Impala.Database("localhost:21050")
```



