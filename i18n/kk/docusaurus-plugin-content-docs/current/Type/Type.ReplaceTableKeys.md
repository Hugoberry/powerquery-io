---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Барлық кілттері көрсетілген кілттер тізімімен ауыстырылған жаңа кесте түрін қайтарады.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Барлық кілттері көрсетілген кілттер тізімімен ауыстырылған жаңа кесте түрін қайтарады.<br />    <br />    Әрбір кілт келесі пішіндегі жазба арқылы анықталады:    <ul>      <li>        <code>Бағандар</code>: кілтті анықтайтын баған атауларының тізімі      </li>      <li>        <code>Негізгі</code>: егер кілт кестенің негізгі кілті болса, <code>рас</code>; әйтпесе, <code>жалған</code>      </li>    </ul>    Кілттердің көрсетілген тізімі біреуден артық негізгі кілт анықталмағанын және кесте түрінде барлық негізгі баған атауларының болуын қамтамасыз ету үшін тексеріледі.    


## Examples

### Example #1 
Кесте түрі бойынша кілт ақпаратын ауыстырыңыз.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
Кесте түрі бойынша бұрын анықталған негізгі ақпаратты өшіріңіз.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
