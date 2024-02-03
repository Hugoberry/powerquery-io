---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Көрсетілген ұзындықтарды пайдаланып бір мәтінге біріктіретін функцияны қайтарады.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Көрсетілген ұзындықтарды пайдаланып мәтіндік мәндер тізімін бір мәтіндік мәнге біріктіретін функцияны қайтарады.


## Examples

### Example #1 
Әрбір кіріс мәнінен таңбалардың көрсетілген сандарын шығару арқылы мәтін мәндерінің тізімін біріктіріңіз.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Нәтижені үлгі мәтінімен алдын ала толтырғаннан кейін, көрсетілген таңбалар санын шығару арқылы мәтін мәндерінің тізімін біріктіріңіз.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
