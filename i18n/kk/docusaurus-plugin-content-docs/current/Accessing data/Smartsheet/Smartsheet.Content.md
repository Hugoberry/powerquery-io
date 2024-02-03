---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Деректер кестесін Smartsheet индекс соңғы нүктесінен қайтарады.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Көрсетілген соңғы нүктеде Smartsheet 2.0 REST API қоңырау шалады және кестеге қайтарылған дерек элементін ауыстырады.


## Examples

### Example #1 
Smartsheet API интерфейсінен пайдаланушылар туралы ақпараты бар кестені алады
```powerquery
Smartsheet.Content("пайдаланушылар")
```

Result: 
```powerquery
Smartsheet API арқылы қайтарылған пайдаланушылар туралы ақпараты бар кесте
```



