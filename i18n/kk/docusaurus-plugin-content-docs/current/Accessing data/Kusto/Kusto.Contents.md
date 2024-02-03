---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Azure Data Explorer (Kusto) қызметінен деректерді импорттайды


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Azure Data Explorer (Kusto) нұсқасынан деректерді импорттайды


## Examples

### Example #1 
Storm Events ақпаратының кестесін қайтарады
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
"Анықтама" кластеріндегі "Үлгілер" дерекқорынан алынған Storm оқиғалары бар кесте
```



