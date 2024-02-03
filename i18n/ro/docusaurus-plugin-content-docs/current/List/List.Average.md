---
title: List.Average
---

# List.Average


## Description

Returnează media valorilor. Funcţionează cu valorile numerice, pentru dată, datetime, datetimezone şi pentru durată.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Returnează valoare medie pentru elementele din listă, <code>list</code>. Rezultatul este oferit în acelaşi tip datatype ca şi valorile din listă. Funcţionează numai cu valorile numerice, pentru dată, pentru oră, datetime, datetimezone şi pentru durată.    Dacă lista este necompletată, se returnează null.


## Examples

### Example #1 
Găsiţi media din lista de numere, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Găsiţi media valorilor date 1 ianuarie 2011, 2 ianuarie 2011 şi 3 ianuarie 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
