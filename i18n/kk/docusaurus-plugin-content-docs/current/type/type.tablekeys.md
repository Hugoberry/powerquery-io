---
title: Type.TableKeys
---

# Type.TableKeys


Көрсетілген кесте үшін ықтимал бос кілттер тізімін қайтарады.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Көрсетілген кесте үшін ықтимал бос кілттер тізімін қайтарады.  
  
Әрбір кілт келесі пішіндегі жазба арқылы анықталады:

-   `Бағандар`: кілтті анықтайтын баған атауларының тізімі
-   `Негізгі`: егер кілт кестенің негізгі кілті болса, `рас`; әйтпесе, `жалған`


## Examples

### Example #1
Кесте түрі үшін кілт ақпаратын қайтарыңыз.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
