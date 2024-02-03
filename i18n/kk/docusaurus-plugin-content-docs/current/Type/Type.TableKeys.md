---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Көрсетілген кесте үшін ықтимал бос кілттер тізімін қайтарады.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Көрсетілген кесте үшін ықтимал бос кілттер тізімін қайтарады.<br />    <br />    Әрбір кілт келесі пішіндегі жазба арқылы анықталады:    <ul>      <li>        <code>Бағандар</code>: кілтті анықтайтын баған атауларының тізімі      </li>      <li>        <code>Негізгі</code>: егер кілт кестенің негізгі кілті болса, <code>рас</code>; әйтпесе, <code>жалған</code>      </li>    </ul>    


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
