---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Fabric Kusto кластерінен деректерді табу режимінде импорттаңыз.


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

KQL дерекқор нұсқасынан деректерді импорттайды


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



