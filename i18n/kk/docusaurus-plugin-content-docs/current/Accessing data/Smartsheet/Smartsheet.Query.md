---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Smartsheet API интерфейсінен JSON нәтижесін қайтарады


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Көрсетілген соңғы нүктеде Smartsheet 2.0 REST API интерфейсіне қоңырау шалады және нәтижелерді JSON жазбасы ретінде қайтарады.


## Examples

### Example #1 
Көрсетілген қосымша аргументі бар Smartsheet API интерфейсінің соңғы нүктесінің парақтарынан деректер алады
```powerquery
Smartsheet.Content("парақтар", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Smartsheet API арқылы қайтарылған парақтар туралы ақпараты бар кесте
```



